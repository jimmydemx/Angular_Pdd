export interface TabItem {
    title: string,
    icon: string,
    link: string,
    selectedIcon: string
}

export interface Ad{
    code?:string;
    data:{
    imageURL:string;
    link:string;
    }
    desc?:string


}

export interface Products{
        state: string,
        data: {
          goodsData: any
        }

}