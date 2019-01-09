import canIUse from './canIUse'
const wxapi = {
    chooseInvoiceTitle(obj:any):void{
        if(canIUse('chooseInvoiceTitle')){
            wx.chooseInvoiceTitle(obj);
        }
    },
    chooseAddress(obj:any):void{
        if(canIUse('chooseAddress')){
            wx.chooseAddress(obj)
        }
    },
    getSystemInfo(obj:any):void{
        if(canIUse('getSystemInfo')){
            wx.getSystemInfo(obj)
        }
    },
    login(obj:any):void{
        if(canIUse('login')){
            wx.login(obj)
        }
    },
    getUserInfo(obj:any):void{
        if(canIUse('getUserInfo')){
            wx.getUserInfo(obj)
        }
    },
    chooseInvoice(obj){
        if(canIUse('chooseInvoice')){
            wx.chooseAddress(obj);
        }
    },
    saveImageToPhotos(obj){
        if(canIUse('saveImageToPhotosAlbum')){
            wx.saveImageToPhotosAlbum(obj);
        }
    }
}

export default wxapi;