export default function canIUse(api_name:string):Boolean{
    if(wx.canIUse(api_name)){
        return true;
    }else{
        wx.showModal({
            title:'提示',
            content:'当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        })
        return false;
    }
}