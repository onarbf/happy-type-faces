export const getCookie = (name:string) =>{
    if (typeof window !== "undefined") {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2 && parts !== undefined) {
            return parts.pop()?.split(';').shift() as string
        };
    }
}
export   const setCookie = ({name, value, days}:any)=>{
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }
