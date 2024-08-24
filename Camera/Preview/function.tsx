import { Alert } from "react-native";
import Toast from 'react-native-toast-message';
import { launchImageLibrary } from "react-native-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import data from '../../config.json'
const URL = data['URl']
// 需要回傳的格式
const TestData = {
    title: "報紙回收指南",
    paragraph: "走在路上拿到捷運站旁放的發的廣告或免費報紙，看完後的你可能隨手就丟進路旁的垃圾桶吧？但報紙主要的成分中紙類和大豆油墨其實是可以回收的，或許在家中或公司為了閱讀方便會裝訂釘書針，記得拆掉之後再回收喔！"
}


const getUserData = async(key: string)=>{
    try {
      // 获取存储的UserData
      const userDataString = await AsyncStorage.getItem('UserData');
  
      if (userDataString !== null) {
        // 解析字符串为对象
        const userData = JSON.parse(userDataString);
        const result = userData[key];
        return result;
      } else {
        console.log('UserData not found');
        return null;
      }
    } catch (error) {
      console.error('Failed to retrieve or parse UserData:', error);
      return null;
    }
  }
//Submit Recycle
export async function submit(backEndConnect:boolean,data: any, setTitle :any, setParagraph: any,setVisible:any, failed:any) {
    if(backEndConnect){
        try {
            const response = await fetch(URL+'sendRcycle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: data
            }).then(response => response.json());
            setTitle(response.title)
            setParagraph(response.paragraph)
            setVisible(true)
        } catch (error) {
          showFailedToast('Submission Failed, please try again.', '')
          failed()
        }
    }
   else{
    setTitle(TestData.title)
    setParagraph(TestData.paragraph)
    setVisible(true)
   }
}

type BodyType = {
    [key: string]: any
};
//Turn submission data to Form Data
export const createFormData = async(body: BodyType = {}) => {
    const data = new FormData();
    const email = await getUserData('email')
    data.append('email',email);
    Object.keys(body).forEach((key) => {
        const value = body[key];
        if (key == 'photo') {
            data.append(key, {
                name: value?.fileName,
                type: value?.type,
                uri: value?.uri
            });

        }
        else
            data.append(key, value.toString());
        
    });
    return data;
};

export const showSuccessToast = (text1: string, text2: string, type = 'success') => {
    Toast.show({
        type: type,
        text1: text1,
        text2: text2,
        topOffset: 65
    });
}
export const showFailedToast = (text1: string, text2: string, type = 'failed') => {
  Toast.show({
      type: type,
      text1: text1,
      text2: text2,
      topOffset: 65
  });
}

export const ShowImageLibrary = async (success = (image:any) => { }, fail = () => { }) => {
    await launchImageLibrary({ mediaType: 'photo' }, (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');

        } else if (response.errorMessage) {
            console.log('Image picker error: ', response.errorMessage);

        } else {
            let image = response.assets?.[0];
            if (image?.uri == undefined) {
                fail();
                
            }
            else {
                success(image);
                
            }
        }
    });
}