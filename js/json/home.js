let json_home = {
  // 分類
  categorys: [
    {
      cId: 01,
      order:3,
      name: '壽司',
      icon: 'img/type/01.png',
    },
    {
      cId: 02,
      order:5,
      name: '拉麵',
      icon: 'img/type/02.png'
    },
    {
      cId: 03,
      order:6,
      name: '飲料',
      icon: 'img/type/03.png'
    },
    {
      cId: 04,
      order:7,
      name: '披薩',
      icon: 'img/type/04.png'
    },
    {
      cId: 05,
      order:2,
      name: '燉飯',
      icon: 'img/type/05.png'
    },
    {
      cId: 06,
      order:1,
      name: '漢堡',
      icon: 'img/type/06.png'
    },
    {
      cId: 07,
      order:4,
      name: '啤酒',
      icon: 'img/type/07.png'
    }
  ],
  // 目前分類名稱
  thisCateId: 01,
  // swiper 分類參數
  swiperCategory: {
    slidesPerView: 3,
    navigation: {
      nextEl: '.cate_right',
      prevEl: '.cate_left'
    },
    slideActiveClass: 'slider_active',
    breakpoints: {
      768: {
        slidesPerView: 5
      },
      1200: {
        slidesPerView: 6
      }
    }
  },
  // 產品列表
  product_list: [
    {
      pId: '01',
      imgURL: '../img/product/01-1.jpg',
      p_price: '90',
      p_name: '鮪魚壽司',
      p_code: 's01',
      cateId: 01,
      p_choose: [
        {
          type: 'radio',
          name: '哇沙米',
          list: ['加', '不加']
        }
      ]
    },
    {
      pId: '02',
      imgURL: '../img/product/01-2.jpg',
      p_price: '80',
      p_name: '鮭魚壽司',
      p_code: 's02',
      cateId: 01,
      p_choose: [
        {
          type: 'radio',
          name: '哇沙米',
          list: ['加', '不加']
        }
      ]
    },
    {
      pId: '03',
      imgURL: '../img/product/01-3.jpg',
      p_price: '60',
      p_name: '三角飯糰',
      p_code: 's03',
      cateId: 01,
      p_choose: [
        {
          type: 'radio',
          name: '哇沙米',
          list: ['加', '不加']
        }
      ]
    },
    {
      pId: '04',
      imgURL: '../img/product/02-1.jpg',
      p_price: '120',
      p_name: '泰式酸辣麵',
      p_code: 'm01',
      cateId: 02,
      p_choose: [
        {
          type: 'radio',
          name: '麵條',
          list: ['烏龍麵', '意麵', '泡麵']
        },
        {
          type: 'radio',
          name: '辣度',
          list: ['不辣', '小辣', '中辣', '超辣']
        },
        {
          type: 'checkbox',
          name: '加料',
          list: ['加溫泉蛋', '加酸菜']
        }
      ]
    },
    {
      pId: '05',
      imgURL: '../img/product/02-2.jpg',
      p_price: '140',
      p_name: '素食拉麵',
      p_code: 'm02',
      cateId: 02,
      p_choose: [
        {
          type: 'radio',
          name: '麵條',
          list: ['烏龍麵', '意麵', '泡麵']
        },
        {
          type: 'radio',
          name: '辣度',
          list: ['不辣', '小辣', '中辣', '超辣']
        },
        {
          type: 'checkbox',
          name: '加料',
          list: ['加溫泉蛋', '加酸菜']
        }
      ]
    },
    {
      pId: '06',
      imgURL: '../img/product/02-3.jpg',
      p_price: '180',
      p_name: '海鮮味增拉麵',
      p_code: 'm03',
      cateId: 02,
      p_choose: [
        {
          type: 'radio',
          name: '麵條',
          list: ['烏龍麵', '意麵', '泡麵']
        },
        {
          type: 'radio',
          name: '辣度',
          list: ['不辣', '小辣', '中辣', '超辣']
        },
        {
          type: 'checkbox',
          name: '加料',
          list: ['加溫泉蛋', '加酸菜']
        }
      ]
    },
    {
      pId: '07',
      imgURL: '../img/product/03-1.jpg',
      p_price: '50',
      p_name: '檸檬汁',
      p_code: 'tea01',
      cateId: 03,
      p_choose: [
        {
          type: 'radio',
          name: '冰塊',
          list: ['多冰', '少冰', '微冰', '去冰']
        },
        {
          type: 'checkbox',
          name: '加料',
          list: ['加珍珠', '加粉條', '加辣']
        }
      ]
    },
    {
      pId: '08',
      imgURL: '../img/product/03-2.jpg',
      p_price: '80',
      p_name: '草莓果汁',
      p_code: 'd02',
      cateId: 03,
      p_choose: [
        {
          type: 'radio',
          name: '冰塊',
          list: ['多冰', '少冰', '微冰', '去冰']
        },
        {
          type: 'checkbox',
          name: '加料',
          list: ['加珍珠', '加粉條', '加辣']
        }
      ]
    },
    {
      pId: '09',
      imgURL: '../img/product/03-3.jpg',
      p_price: '60',
      p_name: '伯爵紅茶',
      p_code: 'd03',
      cateId: 03,
      p_choose: [
        {
          type: 'radio',
          name: '冰塊',
          list: ['多冰', '少冰', '微冰', '去冰']
        },
        {
          type: 'checkbox',
          name: '加料',
          list: ['加珍珠', '加粉條', '加辣']
        }
      ]
    },
    {
      pId: '10',
      imgURL: '../img/product/03-4.jpg',
      p_price: '140',
      p_name: '蔓越梅冰沙',
      p_code: 'd04',
      cateId: 03,
      p_choose: [
        {
          type: 'radio',
          name: '冰塊',
          list: ['多冰', '少冰', '微冰', '去冰']
        },
        {
          type: 'checkbox',
          name: '加料',
          list: ['加珍珠', '加粉條', '加辣']
        }
      ]
    },
    {
      pId: '11',
      imgURL: '../img/product/04-1.jpg',
      p_price: '220',
      p_name: '美國披薩',
      p_code: 'd01',
      cateId: 04,
      p_choose: [
        {
          type: 'radio',
          name: '麵皮',
          list: ['起司', '薄片']
        },
        {
          type: 'checkbox',
          name: '加料',
          list: ['加辣椒', '加香菜', '加檸檬']
        }
      ]
    },
    {
      pId: '12',
      imgURL: '../img/product/05-1.jpg',
      p_price: '230',
      p_name: '青醬燉飯',
      p_code: 'r112',
      cateId: 05,
      p_choose: [
        {
          type: 'radio',
          name: '飯',
          list: ['義大利米', '白飯']
        }
      ]
    },
    {
      pId: '13',
      imgURL: '../img/product/05-2.jpg',
      p_price: '250',
      p_name: '白醬燉飯',
      p_code: 'r113',
      cateId: 05,
      p_choose: [
        {
          type: 'radio',
          name: '飯',
          list: ['義大利米', '白飯']
        }
      ]
    },

    {
      pId: '14',
      imgURL: '../img/product/06-1.jpg',
      p_price: '150',
      p_name: '起司漢堡',
      p_code: 'h001',
      cateId: 06,
      p_choose: [
        {
          type: 'radio',
          name: '麵包',
          list: ['炭香', '美國麵包']
        },
        {
          type: 'checkbox',
          name: '加料',
          list: ['起司', '酸豆', '花生']
        }
      ]
    },
    {
      pId: '15',
      imgURL: '../img/product/06-2.jpg',
      p_price: '180',
      p_name: '番茄漢堡',
      p_code: 'h002',
      cateId: 06,
      p_choose: [
        {
          type: 'radio',
          name: '麵包',
          list: ['炭香', '美國麵包']
        },
        {
          type: 'checkbox',
          name: '加料',
          list: ['起司', '酸豆', '花生']
        }
      ]
    },
    {
      pId: '16',
      imgURL: '../img/product/06-3.jpg',
      p_price: '130',
      p_name: '超大漢堡',
      p_code: 'h003',
      cateId: 06,
      p_choose: [
        {
          type: 'radio',
          name: '麵包',
          list: ['炭香', '美國麵包']
        },
        {
          type: 'checkbox',
          name: '加料',
          list: ['起司', '酸豆', '花生']
        }
      ]
    },
    {
      pId: '17',
      imgURL: '../img/product/06-4.jpg',
      p_price: '190',
      p_name: '鮮蝦漢堡',
      p_code: 'h004',
      cateId: 06,
      p_choose: [
        {
          type: 'radio',
          name: '麵包',
          list: ['炭香', '美國麵包']
        },
        {
          type: 'checkbox',
          name: '加料',
          list: ['起司', '酸豆', '花生']
        }
      ]
    },
    {
      pId: '18',
      imgURL: '../img/product/07-1.jpg',
      p_price: '80',
      p_name: '珍珠奶茶',
      p_code: 'bb01',
      cateId: 07,
      p_choose: [
        {
          type: 'radio',
          name: '冰塊',
          list: ['多冰', '少冰', '微冰', '去冰']
        }
      ]
    },
    {
      pId: '19',
      imgURL: '../img/product/07-2.jpg',
      p_price: '180',
      p_name: '一打海尼根',
      p_code: 'bb02',
      cateId: 07,
      p_choose: [
        {
          type: 'radio',
          name: '冰塊',
          list: ['多冰', '少冰', '微冰', '去冰']
        }
      ]
    }
  ],
  // 自選項目(後端帶出)
  choose_list: [
    {
      type: 'radio',
      name: '冰塊',
      list: ['多冰', '少冰', '微冰', '去冰']
    },
    {
      type: 'checkbox',
      name: '加料',
      list: ['加珍珠', '加粉條', '加辣']
    }
  ],
  // 目前選擇的產品
  select_product: {
    pId: '',
    name: '',
    num: 1,
    price: '',
    choose: []
  },
  // 目前選擇的產品自選選項
  select_product_choose: '',
  // 目前選擇的產品位置
  cartIndex: 0,
  // 目前選擇的產品id
  check_product_id: '',
  // 購物車
  cart: {
    cart_product: [
      // {
      //   pId:'01',
      //   name: '地獄拉麵',
      //   num: 1,
      //   price: 180,
      //   p_code: '523',
      //   choose: ['加珍珠', '少冰']
      // }
    ],
    total: 0,
    count: 0,
    discount: 0
  },
  // 代碼搜尋
  searchCode: '',
  //結帳視窗
  checkOutModal: false,
  //會員專區視窗
  memberModal: false,
  //轉入訂單視窗
  Transfer_order_modal: false,
  //進階設定視窗
  user_setup_modal: false,
  //公告視窗
  annocementModal: false,
  // 結帳類型
  checkout_type: 'forhere',
  //收現金額
  get_cash: 0,

  // 發票號碼
  invoice_num: 'BZ5523912',
  // 店家設置
  storeSetUp: {
    cID: '01',
    productListWidth: '',
    cartWidth: '',
    userSize: '16',
    userColor: '#50c1bf'
  }
};
