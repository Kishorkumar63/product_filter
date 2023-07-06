const data = [
    {
      id: 1,
      name: "Fire Boltt Ninja 2",
      img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
      amt: 1599,
      seller: "Boltt Store",
      catagory: "Watch",
    },
  
    {
      id: 2,
      name: "Noise Pulse Go",
      img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
      amt: 1300,
      seller: "Noise Store",
      catagory: "Watch",
    },
  
    {
      id: 3,
      name: "boAt Xtend Pro",
      img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
      amt: 2799,
      seller: "Rajesh Watchs",
      catagory: "Watch",
    },
    {
      id: 4,
      name: "Lenovo Tab M8",
      img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
      amt: 9270,
      seller: "Stonehenge Retail",
      catagory: "Tablets",
    },
    {
      id: 5,
      name: "Honor PAD X8",
      img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
      amt: 12999,
      seller: "Honor india",
      catagory: "Tablets",
    },
  
    {
      id: 6,
      name: "IKALL N9 ",
      img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
      amt: 3999,
      seller: "IKALL Store",
      catagory: "Tablets",
    },
  
    {
      id: 7,
      name: "Oppo Pad Air",
      img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
      amt: 15999,
      seller: "Oppo Store",
      catagory: "Tablets",
    },
    {
      id: 8,
      name: "Acer EK220Q",
      img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
      amt: 6249,
      seller: "Accer Store",
      catagory: "Monitors",
    },
    {
      id: 9,
      name: "Samsung 24",
      img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
      amt: 9799,
      seller: "Samsung Store",
      catagory: "Monitors",
    },
  
    {
      id: 10,
      name: "ZEBRONICS AC32FHD ",
      img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
      amt: 12799,
      seller: "ZEBRONICS Store",
      catagory: "Monitors",
    },
  ];
  const productcon=document.querySelector(".products");

  function displayproduct(products)
  {
    const product_details=products.map((product)=>{
      return  ` <div class="product">
      <div class="img">
        <img src="${product.img}" alt="${product.name}" />
      </div>
      <div class="product-details">
        <span class="name">${product.name}</span>
        <span class="amt">Rs.${product.amt}</span>
        <span class="seller">${product.seller}</span>
      </div>
    </div>`
    })
    console.log(product_details);
    productcon.innerHTML=product_details
  }
  function Setcategory()
  {
    const category_list=document.querySelector(".category-list");
const allcategoriges=data.map((product)=>product.catagory);
console.log(allcategoriges)
const cataegories=["all",...allcategoriges.filter((product,index)=>{
  return allcategoriges.indexOf(product)===index
})]
category_list.innerHTML=cataegories.map((cat)=>
  `<li>${cat}<li>`
).join("")
category_list.addEventListener("click",(e)=>{
  const selectedcatgoriges=e.target.textContent
  console.log(selectedcatgoriges);
  selectedcatgoriges==="all"?displayproduct(data):displayproduct(data.filter((num)=>num.catagory===selectedcatgoriges))

})
  }
  displayproduct(data)
  Setcategory()
  const priceRange=document.querySelector("#priceRange");
  const priceValue=document.querySelector(".priceValue");
  function setprices()
  {
const pricelist=data.map((price)=>price.amt)
const minprice=Math.min(...pricelist)
const maxprice=Math.max(...pricelist)
console.log(minprice,maxprice);
priceRange.max=maxprice;
priceRange.min=minprice;
priceValue.textContent="Rs:"+maxprice;
priceRange.addEventListener("input",(e)=>{
  priceValue.textContent="Rs:"+e.target.value;
  displayproduct(data.filter((range)=>range.amt<=e.target.value))
});
  }
  setprices()
  const txtSearch=document.querySelector("#txtSearch");
  txtSearch.addEventListener("keyup",(e)=>{
const content=e.target.value.toLowerCase();
if(content)
{
  displayproduct(data.filter((key)=>key.name.toLowerCase.indexOf(content)!=-1))
}
else
{
  displayproduct(data)
}
  })


   