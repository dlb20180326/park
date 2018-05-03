/**
 * Created by Administrator on 2018/5/3 0003.
 */


//时间过滤器
const formatDuring= function (value) {
    if (!value) {
        return '无';
    } else {
        Date.prototype.toLocaleString = function(){
            let months = this.getMonth()+1;
            if(months < 10){
                months = '0' + months;
            }
            let dates = this.getDate();
            if(dates < 10){
                dates = '0' + dates;
            }
            let hours = this.getHours();
            if(hours < 10){
                hours = '0' + hours;
            }
            let minutes = this.getMinutes();
            if(minutes < 10){
                minutes = '0' + minutes;
            }
            return this.getFullYear() +'.'+months+'.'+dates+' '+hours+':'+minutes
        }
        return new Date(value).toLocaleString();
    }
};
const formatDurings=function (value) {

    Date.prototype.toLocaleString = function(){
        let minutes = this.getMinutes();
        if(minutes < 10){
            minutes = '0' + minutes;
        }
        return this.getFullYear() +'.'+ (this.getMonth()+1)+'.'+this.getDate();
    }
    return new Date(value).toLocaleString();


}

export {formatDuring,formatDurings}
