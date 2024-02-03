export const IMG_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const SWIGGY_API_URL =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8912141&lng=81.0648758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  export const CARD_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

// export const RESTAURANT_API_URL = {
//   319086: "https://run.mocky.io/v3/2825c11c-b106-40cf-94ce-5ed126356795",
//   19563: "https://run.mocky.io/v3/fe8cf0f9-813d-4935-985a-a8844970c7fb",
//   757: "https://run.mocky.io/v3/48130492-b989-492c-b03f-e0561df6d739",
//   65797: "https://run.mocky.io/v3/281f5776-e08c-40c9-a4f3-4a7bab49e8f0",
//   223: "https://run.mocky.io/v3/baeb19d5-a4c4-4901-8888-97c6a3e2d90d",
//   229: "https://run.mocky.io/v3/94ae76b2-68c5-45a6-a32f-13a6db855f0e",
//   496423: "https://run.mocky.io/v3/c1937885-6a8a-45bf-b9b3-9f256dc81daf",
//   334476: "https://run.mocky.io/v3/8e06ed84-fdb1-4ed9-ae8b-9bc8abc06205",
//   275: "https://run.mocky.io/v3/7ba694a9-25b6-4f15-aa00-8283483ea7d5",
//   18973: "https://run.mocky.io/v3/1d9e2683-a9f9-4545-96ea-32c592896ce8",
//   233815: "https://run.mocky.io/v3/8db2e012-2ece-49bc-b0c7-35f05fbbdc88",
//   293023: "https://run.mocky.io/v3/6d91bd06-c73c-4720-9f46-3a810ea3d7cd",
//   236943: "https://run.mocky.io/v3/d8e4889c-42a2-46e6-92f3-665781f5db5d",
//   256718: "https://run.mocky.io/v3/1518560e-1c91-4853-9086-ba5de17f0344",
//   337335: "https://run.mocky.io/v3/01c1efa1-04b1-4941-a805-adaddbceac37",
//   495055: "https://run.mocky.io/v3/eb2817f9-0c96-4d17-83b3-d68b56b40bea",
// }

export const RESTAURANT_API_URL =   "https://corsproxy.org/?" +
encodeURIComponent(
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.51981990724166&lng=73.86026275822753&restaurantId="
);


// export const RESTAURANT_API_URL_LAST =  "&catalog_qa=undefined&submitAction=ENTER"

export const swiggyFaqs = [
  {
    question: "How do I place an order on Hunger Hero ?",
    answer: (
      <>
        1. Download the Hunger Hero website.
        <br />
        2. Browse restaurants and choose your desired items.
        <br />
        3. Add them to your cart and proceed to checkout.
        <br />
        4. Enter your delivery address and choose a payment method.
        <br />
        5. Place your order and track its progress in real-time.
      </>
    ),
  },
  {
    question: "What are the delivery charges on Hunger Hero ?",
    answer:
      "Delivery charges on Hunger Hero  vary depending on the restaurant, distance, and order value. You can see the estimated delivery charge before placing your order.",
  },
  {
    question: "What are the payment options available on Hunger Hero ?",
    answer:
      "Hunger Hero  accepts various payment methods, including cash on delivery, credit/debit cards, UPI, and online wallets.",
  },
  {
    question: "How can I track my order on Hunger Hero ?",
    answer:
      "You can track your order in real-time through the Hunger Hero website. You will receive notifications about the order's progress.",
  },
];
