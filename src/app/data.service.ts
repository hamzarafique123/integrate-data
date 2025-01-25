import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  public a = "Shop";
  private arr = [
    {
      img:'../../assets/sales.jpeg'
    },
    {
      img:'../../assets/sales3.jpeg'
    },
    {
      img:'../../assets/sales.jpeg'
    },
  ];

  private tan = [
    {
      img1:'../../assets/store/img1.png',text1:'Clothing',img2:'../../assets/store/img3.png',text2:'530',img3:'../../assets/store/img3.png',img4:'../../assets/store/img4.png'
    },
    {
      img1:'../../assets/store/img1.png',text1:'Clothing',img2:'../../assets/store/img3.png',text2:'530',img3:'../../assets/store/img3.png',img4:'../../assets/store/img4.png'
    },
    {
      img1:'../../assets/store/img1.png',text1:'Clothing',img2:'../../assets/store/img3.png',text2:'530',img3:'../../assets/store/img3.png',img4:'../../assets/store/img4.png'
    },
    {
      img1:'../../assets/store/img1.png',text1:'Clothing',img2:'../../assets/store/img3.png',text2:'530',img3:'../../assets/store/img3.png',img4:'../../assets/store/img4.png'
    },
    {
      img1:'../../assets/store/img1.png',text1:'Clothing',img2:'../../assets/store/img3.png',text2:'530',img3:'../../assets/store/img3.png',img4:'../../assets/store/img4.png'
    },
    {
      img1:'../../assets/store/img1.png',text1:'Clothing',img2:'../../assets/store/img3.png',text2:'530',img3:'../../assets/store/img3.png',img4:'../../assets/store/img4.png'
    },
   
  ];

  private arty = [
    {
      img:'../../assets/store/bag3.png'
    },
    {
      img:'../../assets/store/watch4.png'
    },
    {
      img:'../../assets/store/h3.png'
    },
    {
      img:'../../assets/store/shoes1.png'
    },
    {
      img:'../../assets/store/img3.png'
    },
    {
      img:'../../assets/store/watch2.png'
    },
    {
      img:'../../assets/store/shoes2.png'
    },
    {
      img:'../../assets/store/bag1.png'
    },
    {
      img:'../../assets/store/e4.jpeg'
    },
    {
      img:'../../assets/store/h1.png'
    },
   
  ];

  private tu = [
    {
      img:'../../assets/store/shoes1.png',text5:'Lorem  amet, consecuter',price: 107.00
    },
    {
      img:'../../assets/store/shoes2.png',text5:'Lorem ipssum dolor , cuter',price: 130.00
    },
    {
      img:'../../assets/store/shoes3.png',text5:'Lorem ipssum  consecuter',price: 187.00
    },
    {
      img:'../../assets/store/shoes4.png',text5:'Lorem   amet, consecuter',price: 197.00
    },
    {
      img:'../../assets/store/shoes1.png',text5:'Lorem ipssum dolor amet',price: 147.00
    },
    {
      img:'../../assets/store/shoes2.png',text5:'Lorem ipssumlor amet, consecuter',price: 137.00
    },
    {
      img:'../../assets/store/shoes1.png',text5:'Lorem ipssum dolor , consecuter',price: 117.00
    },
  ];

  private cardsData = [
    { img: '../../assets/store/card1.png', overlayImg: '../../assets/store/discount.png' },
  { img: '../../assets/store/card5.png', overlayImg: '../../assets/store/discount.png' },
  { img: '../../assets/store/card2.png', overlayImg: '../../assets/store/discount.png' }
  ];

  private ra = [
    {
      img:'../../assets/store/card5.png',price: 1780,icon:'heart',text5:'New'
    },
    {
      img:'../../assets/store/card1.png',price: 1890,icon:'heart',text5:'New'
    },
    {
      img:'../../assets/store/sc3.png',price: 1580,icon:'heart',text5:'New'
    },
    {
      img:'../../assets/store/card3.png',price: 1230,icon:'heart',text5:'New'
    },
    {
      img:'../../assets/store/card4.png',price: 1380,icon:'heart',text5:'New'
    },
    {
      img:'../../assets/store/img4.png',price: 1180,icon:'heart',text5:'New'
    },
    {
      img:'../../assets/store/cp6.png',price: 1110,icon:'heart',text5:'New'
    },
    {
      img:'../../assets/store/card6.png',price: 1320,icon:'heart',text5:'New'
    },
    {
      img:'../../assets/store/cp4.png',price: 1990,icon:'heart',text5:'New'
    },
    {
      img:'../../assets/store/h3.png',price: 2380,icon:'heart',text5:'New'
    },
    {
      img:'../../assets/store/img2.png',price: 2280,icon:'heart',text5:'New'
    },
  ];

  private humi = [
    {
      img:'../../assets/store/card6.png',text5:'Lorem ipssum dolor sit',price: 150
    },
    {
      img:'../../assets/store/card2.png',text5:'Lorem ipssum sit',price: 123
    },
    {
      img:'../../assets/store/card3.png',text5:'Lorem  dolor sit',price: 170
    },
    {
      img:'../../assets/store/card4.png',text5:'Lorem ipssum  sit',price: 359
    },
    {
      img:'../../assets/store/card5.png',text5:'Lorem ipssum dolor ',price: 190
    },
    {
      img:'../../assets/store/card6.png',text5:'Lorem  dolor sit',price: 177
    },
  ];
  private arrr: any[] = [
    { img: '../../assets/store/cp4.png' },
    { img: '../../assets/store/cp1.png' },
    { img: '../../assets/store/shoes4.png' },
    { img: '../../assets/store/h3.png' },
    { img: '../../assets/store/h4.png' },
    { img: '../../assets/store/image1.png' },
    { img: '../../assets/store/image3.png' },
    { img: '../../assets/store/sc3.png' },
    { img: '../../assets/store/watch3.png' },
    { img: '../../assets/store/watch3.png' },
  ];

  private humii: any[] = [
    { 
      img: '../../assets/store/card3.png', text5: 'Lorem ipsum dolor sit amit', price: 17, button1: 'Pink', button2: 'M', icon1: 'bag-handle-outline', icon2: 'add-circle-outline'
    },
    { 
      img: '../../assets/store/card6.png', text5: 'Lorem ipsum dolor sit amit', price: 12, button1: 'Pink', button2: 'M', icon1: 'bag-handle-outline', icon2: 'add-circle-outline'
    },
    { 
      img: '../../assets/store/card5.png', text5: 'Lorem ipsum dolor sit amit', price: 27, button1: 'Pink', button2: 'M', icon1: 'bag-handle-outline', icon2: 'add-circle-outline'
    },
    { 
      img: '../../assets/store/card2.png', text5: 'Lorem ipsum dolor sit amit', price: 19, button1: 'Pink', button2: 'M', icon1: 'bag-handle-outline', icon2: 'add-circle-outline'
    }
  ];
  
    private artr = [
      { color: 'Red' },  // Example colors
      { color: 'blue' },
      { color: 'yellow' },
      { color: 'pink' },
      { color: 'green' },
      { color: 'orange'},
      { color: 'purple' },
      { color: 'black' },
      { color: 'salmon' },  
  ] 
  private bun=[
    {
      img:'../../assets/store/hami.jpg',
    },
   
  ]
  private ar = [
    { img: '../../assets/store/card6.png', text5: 'Lorem ipssum sit', price: 17 },
    { img: '../../assets/store/card2.png', text5: 'Lorem ipssum', price: 176 },
    { img: '../../assets/store/card3.png', text5: 'Lorem ipssum dolor sit', price: 247 },
    { img: '../../assets/store/card4.png', text5: 'Lorem ipssum dolor ', price: 877 },
    { img: '../../assets/store/card5.png', text5: 'Lorem ipssum  sit', price: 907 },
    { img: '../../assets/store/card6.png', text5: 'Lorem dolor sit', price: 77 },
  ];
  private am=[
    {
      img:'../../assets/store/swiper.jpg'
    },
    {
      img:'../../assets/store/swiper.jpg'
    },
    {
      img:'../../assets/store/swiper.jpg'
    },
  ]
  private artry = [
    {
      img: '../../assets/store/image3.png',
      text: 'I am Romina',
      ae: [
        { img: '../../assets/store/image3.png' },
        { img: '../../assets/store/card3.png' },
        { img: '../../assets/store/card2.png' }
      ]
    },
    {
      img: '../../assets/store/card2.png',
      text: 'I am Romina',
      ae: [
        { img: '../../assets/store/image3.png' },
        { img: '../../assets/store/card3.png' },
        { img: '../../assets/store/card2.png' }
      ]
    },
    {
      img: '../../assets/store/card3.png',
      text: 'I am Romina',
      ae: [
        { img: '../../assets/store/image3.png' },
        { img: '../../assets/store/card3.png' },
        { img: '../../assets/store/card2.png' }
      ]
    },
    {
      img: '../../assets/store/card1.png',
      text: 'I am Romina',
      ae: [
        { img: '../../assets/store/image3.png' },
        { img: '../../assets/store/card3.png' },
        { img: '../../assets/store/card2.png' }
      ]
    },
    {
      img: '../../assets/store/card2.png',
      text: 'I am Romina',
      ae: [
        { img: '../../assets/store/image3.png' },
        { img: '../../assets/store/card3.png' },
        { img: '../../assets/store/card2.png' }
      ]
    },
    {
      img: '../../assets/store/sc1.png',
      text: 'I am Romina',
      ae: [
        { img: '../../assets/store/image3.png' },
        { img: '../../assets/store/card3.png' },
        { img: '../../assets/store/card2.png' }
      ]
    },
    {
      img: '../../assets/store/sc2.png',
      text: 'I am Romina',
      ae: [
        { img: '../../assets/store/image3.png' },
        { img: '../../assets/store/card3.png' },
        { img: '../../assets/store/card2.png' }
      ]
    },
    {
      img: '../../assets/store/sc3.png',
      text: 'I am Romina',
      ae: [
        { img: '../../assets/store/image3.png' },
        { img: '../../assets/store/card3.png' },
        { img: '../../assets/store/card2.png' }
      ]
    },
  ];
  private au = [
    { img: '../../assets/store/card6.png', text5: 'Lorem ipsum dolor sit', price: 17.00, price2: 20.00 },
    { img: '../../assets/store/card2.png', text5: 'Lorem ipsum  sit', price: 179.00, price2: 30.00 },
    { img: '../../assets/store/card3.png', text5: 'Lorem  dolor sit', price: 18.00, price2: 40.00 },
    { img: '../../assets/store/card4.png', text5: 'Lorem ipsum dolor ', price: 140.00, price2: 50.00 },
    { img: '../../assets/store/card5.png', text5: 'Lorem ipsum r sit', price: 15.00, price2: 60.00 },
    { img: '../../assets/store/card6.png', text5: 'Lorem  dolor sit', price: 12.00, price2: 90.00 },
  ];
  private an=[
    {
      img:'../../assets/store/card6.png',text5:'Lorem ipssum dolor sit',price: 17.00,price2: 20.00
    },
    {
      img:'../../assets/store/card2.png',text5:'Lorem ipssum dolor sit',price: 17.00,price2: 20.00
    },
    {
      img:'../../assets/store/card3.png',text5:'Lorem ipssum dolor sit',price: 17.00,price2: 20.00
    },
    {
      img:'../../assets/store/card4.png',text5:'Lorem ipssum dolor sit',price: 17.00,price2: 20.00
    },
    {
      img:'../../assets/store/card5.png',text5:'Lorem ipssum dolor sit',price: 17.00,price2: 20.00
    },
    {
      img:'../../assets/store/card6.png',text5:'Lorem ipssum dolor sit',price: 17.00,price2: 20.00
    },
  ]
  private at=[
    {
      img:'../../assets/store/card6.png',text5:'Lorem ipssum dolor sit',price: 17
    },
    {
      img:'../../assets/store/card2.png',text5:'Lorem ipssum dolor sit',price: 17
    },
    {
      img:'../../assets/store/card3.png',text5:'Lorem ipssum dolor sit',price: 17
    },
    {
      img:'../../assets/store/card4.png',text5:'Lorem ipssum dolor sit',price: 17
    },
    {
      img:'../../assets/store/card5.png',text5:'Lorem ipssum dolor sit',price: 17
    },
    {
      img:'../../assets/store/card6.png',text5:'Lorem ipssum dolor sit',price: 17
    },
  ]
  private ao=[
    {
      img:'../../assets/store/shoes1.png',text:'Dresses'
    },
    {
      img:'../../assets/store/bag1.png',text:'pants'
    },
    {
      img:'../../assets/store/watch1.png',text:'Shirts'
    },
    {
      img:'../../assets/store/h1.png',text:'Shorts'
    },
    {
      img:'../../assets/store/card6.png',text:'Jackets'
    },
    {
      img:'../../assets/store/cp5.png',text:'Branded'
    },
    {
      img:'../../assets/store/h3.png',text:'Polo'
    },
    {
      img:'../../assets/store/cp1.png',text:'T-shirts'
    },
    {
      img:'../../assets/store/watch2.png',text:'Watches'
    },
    {
      img:'../../assets/store/card3.png',text:'Clothes'
    },
    {
      img:'../../assets/store/h1.png',text:'Hoodies'
    },
    {
      img:'../../assets/store/h2.png',text:'Tunics'
    },
    {
      img:'../../assets/store/image2.png',text:'Pants'
    },
  ]
  private tani=[
   
    {
      img:'../../assets/store/cp4.png',text:'Dresses'
    },
    {
      img:'../../assets/store/cp1.png',text:'pants'
    },
    {
      img:'../../assets/store/shoes4.png',text:'Shirts'
    },
    {
      img:'../../assets/store/h3.png',text:'Shorts'
    },
    {
      img:'../../assets/store/h4.png',text:'Jackets'
    },
    {
      img:'../../assets/store/image1.png',text:'Branded'
    },
    {
      img:'../../assets/store/image3.png',text:'Polo'
    },
    {
      img:'../../assets/store/sc3.png',text:'T-shirts'
    },
    {
      img:'../../assets/store/watch3.png',text:'Watches'
    },
    {
      img:'../../assets/store/h1.png',text:'Clothes'
    },
    {
      img:'../../assets/store/img3.png',text:'Hoodies'
    },
    {
      img:'../../assets/store/h2.png',text:'Tunics'
    },
    {
      img:'../../assets/store/hami.jpg',text:'Pants'
    },

  ]

  private aru = [
    { img: '../../assets/store/shoes1.png', text: 'Dresses', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/bag1.png', text: 'Pants', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/watch1.png', text: 'Shirts', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/h1.png', text: 'Shorts', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/card6.png', text: 'Jackets', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/cp5.png', text: 'Branded', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/h3.png', text: 'Polo', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/cp1.png', text: 'T-shirts', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/watch2.png', text: 'Watches', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/card3.png', text: 'Clothes', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/h1.png', text: 'Hoodies', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/h2.png', text: 'Tunics', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/image2.png', text: 'Pants', radio: 'custom-checked', showRadio: false }
  ];

  private ta= [
    { img: '../../assets/store/cp4.png', text: 'Dresses', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/cp1.png', text: 'Pants', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/shoes4.png', text: 'Shirts', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/h3.png', text: 'Shorts', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/h4.png', text: 'Jackets', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/image1.png', text: 'Branded', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/image3.png', text: 'Polo', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/sc3.png', text: 'T-shirts', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/watch3.png', text: 'Watches', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/h1.png', text: 'Clothes', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/img3.png', text: 'Hoodies', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/h2.png', text: 'Tunics', radio: 'custom-checked', showRadio: false },
    { img: '../../assets/store/hami.jpg', text: 'Pants', radio: 'custom-checked', showRadio: false }
  ];
  public aa = "Shoppee";
  public bb = { text1: 'Beautiful eCommerce UI kit' };
  public cc = { text2: 'for your online store' };
  public dd = { butt: 'block' };
  public ee = { text3: 'Let\'s get started' };
  public ff = { text4: 'I already have an account ' };
  public gg = { butt: 'round' };
  public hh = { icon1: 'arrow-forward' };

  public ha ="Create Account"

  public tai = "Wishlist";
  public tb = "Recently viewed";
  public tc: any = { butt: '' };
  public ttd: any = { icon1: 'arrow-forward' };
  public te: any = { img1: '../../assets/store/cp4.png' };
  public tf: any = { img2: '../../assets/store/cp1.png' };
  public tg: any = { img3: '../../assets/store/shoes4.png' };
  public th: any = { img4: '../../assets/store/h3.png' };
  public ti: any = { img5: '../../assets/store/h4.png' };
  public tj: any = { img6: '../../assets/store/image1.png' };
  public tk: any = { img7: '../../assets/store/image3.png' };
  public tl: any = { img8: '../../assets/store/sc3.png' };
  public tm: any = { img9: '../../assets/store/watch3.png' };
  public tn: any = { img10: '../../assets/store/watch3.png' };
  public to: any = { img11: '../../assets/store/img3.png' };
  public tp: any = { img12: '../../assets/store/h2.png' };
  public tq: any = { img13: '../../assets/store/hami.jpg' };
  public tr: any = { img14: '' };
  public ts: any = { icon2: '' };
  public tt: any = { text1: '' };
  public tau: any = { text2: '' };
  public tv: any = { text3: '' };
  public tw: any = { butt2: '' };
  public tx: any = { icon3: '' };
  public ty: any = { icon4: '' };
  public tz: any = { img15: '' };
  public taa: any = { text9: '' };
  public tbb: any = { img16: '' };
  public tcc: any = { text10: '' };
  public tdd: any = { img17: '' };
  public tee: any = { text11: '' };
  public ttt: any = { icon7: 'home-outline' };
  public tuu: any = { icon8: 'heart-outline' };
  public tvv: any = { icon9: 'reader-outline' };
  public tww: any = { icon10: 'layers-outline' };
  public txx: any = { icon11: 'person-outline' };


  public ama = "Settings"
public amb = "Payment Methods"
  public amc:any={img1:'../../assets/store/swiper.jpg'}
public amd:any={butt:'large'}
public ame:any={icon1:'add'}
public amf:any={butt2:'block'}
public tti:any={icon7:'home-outline'}
public uui:any={icon8:'heart-outline'}
public vvi:any={icon9:'reader-outline'}
public wwi:any={icon10:'layers-outline'}
public xxi:any={icon11:'person-outline'}
  getAt(){
    return this.at;
  }
  getAo(){
    return this.ao;
  }
  getTani(){
    return this.tani;
  }
  getAru(){
    return this.aru;
  }
  getTa(){
    return this.ta;
  }

  getAn(){
    return this.an;
  }
  getAu(){
    return this.au;
  }
  getArtry(){
    return this.artry;
  }
  getAm(){
    return this.am;
  }
  getAr(){
    return this.ar;
  }
  getArtr(){
    return this.artr;
  }
  getBun(){
    return this.bun;
  }
  getArrr() {
    return this.arrr;
  }

  getHumii() {
    return this.humii;
  }
  getArr() {
    return this.arr;
  }

  getTan() {
    return this.tan;
  }

  getArty() {
    return this.arty;
  }

  getTu() {
    return this.tu;
  }

  getCardsData() {
    return this.cardsData;
  }

  getRa() {
    return this.ra;
  }

  getHumi() {
    return this.humi;
  }
}
