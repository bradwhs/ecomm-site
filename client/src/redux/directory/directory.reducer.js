const INITIAL_STATE = {
  sections: [
    {
      title: 'socks',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0234/4461/files/cute-but-crazy-colorful-crew-socks_1600x.jpg?v=1620005708',
      id: 1,
      linkUrl: 'shop/socks',
    },
    {
      title: 'eletronics',
      imageUrl:
        'https://cdn.mos.cms.futurecdn.net/88dae3a48f3e67d39af6a18657d92488-1200-80.jpg',
      id: 2,
      linkUrl: 'shop/electronics',
    },
    {
      title: 'jewelery',
      imageUrl:
        'https://www.crushpixel.com/big-static10/preview4/jewellery-arranged-background-489416.jpg',
      id: 3,
      linkUrl: 'shop/jewelery',
    },
    {
      title: 'womens',
      imageUrl:
        'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl:
        'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-david-gandy.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
