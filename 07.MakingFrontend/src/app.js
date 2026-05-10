import React from "react";
import ReactDOM from "react-dom/client";

/**
 * ? CONFIG DRIVEN UI:
 * * Instead of hardcoding 100 cards, we use data (usually from an API).
 * * This data controls what the UI looks like.
 * * In real project this type of data will come from Backend API
 */


//Using HardCoded real Data from Swiggy API.
//This is complex array of Object But you can go for light reading of this Array of object to check how it looks.
//keep it close with toggle in your editor for better readbility of file
let realTimeRestarantData = [
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  info: {
    id: "37687",
    name: "McDonald's",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/24de7dd8-b50f-40e2-861f-7c6a32a342b1_37687.JPG",
    locality: "Prahlad Nagar",
    areaName: "Prahlad Nagar",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.5,
    parentId: "630",
    avgRatingString: "4.5",
    totalRatingsString: "29K+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 4.5,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "4.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-02-22 02:45:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Burger.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Burger.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.3",
        ratingCount: "8.1K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-955200f2-e4e8-4cf4-b323-182d5368c7d8",
  },
  cta: {
    link: "https://www.swiggy.com/city/ahmedabad/mcdonalds-prahlad-nagar-rest37687",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  info: {
    id: "40828",
    name: "Subway",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/379209de-a925-4b3d-8b35-315eb1d97059_40828.jpg",
    locality: "Auda Garden",
    areaName: "Prahlad Nagar",
    costForTwo: "₹350 for two",
    cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
    avgRating: 4.5,
    parentId: "2",
    avgRatingString: "4.5",
    totalRatingsString: "8.0K+",
    sla: {
      deliveryTime: 22,
      lastMileTravel: 3.8,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "3.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-02-21 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-955200f2-e4e8-4cf4-b323-182d5368c7d8",
  },
  cta: {
    link: "https://www.swiggy.com/city/ahmedabad/subway-auda-garden-prahlad-nagar-rest40828",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  info: {
    id: "37942",
    name: "KFC",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/e83ff309-6c63-40a7-844a-25169e612065_37942.JPG",
    locality: "Prahlad Nagar",
    areaName: "Prahlad Nagar",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
    avgRating: 4.3,
    parentId: "547",
    avgRatingString: "4.3",
    totalRatingsString: "13K+",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 3.8,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "3.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-02-22 05:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      discountTag: "FLAT DEAL",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-955200f2-e4e8-4cf4-b323-182d5368c7d8",
  },
  cta: {
    link: "https://www.swiggy.com/city/ahmedabad/kfc-prahlad-nagar-rest37942",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  info: {
    id: "786794",
    name: "Theobroma",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/17/b7d8877c-0648-483c-9164-12c33dc887b5_786794.JPG",
    locality: "South Bopal",
    areaName: "Bopal",
    costForTwo: "₹400 for two",
    cuisines: ["Bakery", "Desserts"],
    avgRating: 4.7,
    parentId: "1040",
    avgRatingString: "4.7",
    totalRatingsString: "1.7K+",
    sla: {
      deliveryTime: 24,
      lastMileTravel: 5.7,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "5.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-02-22 00:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Desserts.png",
          description: "Delivery!",
        },
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Desserts.png",
              },
            },
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      discountTag: "FLAT DEAL",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.0",
        ratingCount: "173",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-955200f2-e4e8-4cf4-b323-182d5368c7d8",
  },
  cta: {
    link: "https://www.swiggy.com/city/ahmedabad/theobroma-south-bopal-rest786794",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  info: {
    id: "41119",
    name: "Burger King",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/98488218-7cab-45c6-883b-6b9b469e507e_41119.jpg",
    locality: "Venus Atlantis",
    areaName: "Prahlad Nagar",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "American"],
    avgRating: 4.4,
    parentId: "166",
    avgRatingString: "4.4",
    totalRatingsString: "37K+",
    sla: {
      deliveryTime: 22,
      lastMileTravel: 4.5,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "4.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-02-22 05:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Burger.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Burger.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹59",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-955200f2-e4e8-4cf4-b323-182d5368c7d8",
  },
  cta: {
    link: "https://www.swiggy.com/city/ahmedabad/burger-king-venus-atlantis-prahlad-nagar-rest41119",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  info: {
    id: "37650",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/59e4483f-e239-4cf1-8f53-52396850f969_37650.JPG",
    locality: "Prahlad Nagar",
    areaName: "Prahlad Nagar",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.4,
    parentId: "721",
    avgRatingString: "4.4",
    totalRatingsString: "12K+",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 4.4,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "4.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-02-22 03:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹110",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.2",
        ratingCount: "3.6K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-955200f2-e4e8-4cf4-b323-182d5368c7d8",
  },
  cta: {
    link: "https://www.swiggy.com/city/ahmedabad/pizza-hut-prahlad-nagar-rest37650",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  info: {
    id: "410200",
    name: "La Pino'z Pizza",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/9/7e99445d-0480-42b7-a4a4-f642903436f3_410200.JPG",
    locality: "Prahlad Nagar",
    areaName: "Prahlad Nagar",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.5,
    parentId: "4961",
    avgRatingString: "4.5",
    totalRatingsString: "6.8K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 4.7,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "4.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-02-22 03:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹79",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.5",
        ratingCount: "3.0K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-955200f2-e4e8-4cf4-b323-182d5368c7d8",
  },
  cta: {
    link: "https://www.swiggy.com/city/ahmedabad/la-pinoz-pizza-prahlad-nagar-rest410200",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
{
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  info: {
    id: "945793",
    name: "The Belgian Waffle Co.",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/e8064f4b-c011-4359-99ea-10b4d582e948_945793.jpg",
    locality: "OPP. RAHUL TOWER",
    areaName: "GF SAHAJANAND PALACE",
    costForTwo: "₹200 for two",
    cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
    avgRating: 4.7,
    veg: true,
    parentId: "2233",
    avgRatingString: "4.7",
    totalRatingsString: "872",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 4.9,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "4.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-02-22 02:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹749",
      discountTag: "FLAT DEAL",
    },
    loyaltyDiscoverPresentationInfo: {
      logoCtx: {
        text: "BENEFITS",
        logo: "v1634558776/swiggy_one/OneLogo_3x.png",
      },
      freedelMessage: "FREE DELIVERY",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-955200f2-e4e8-4cf4-b323-182d5368c7d8",
  },
  cta: {
    link: "https://www.swiggy.com/city/ahmedabad/the-belgian-waffle-co-opp-rahul-tower-gf-sahajanand-palace-rest945793",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
},
];       


//------------------------------ COMPONENTS

// *  --- HEARDER COMPONENT ---
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://tse2.mm.bing.net/th/id/OIP.cW3C10wMDP5EpuYjdKow0gHaE8?pid=Api&P=0&h=180"
          alt="App Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};




// * --- RESTAURANT CARD COMPONENT ---
/**
 * ? WHAT ARE PROPS?
 * * Props (Properties) are like arguments to a function.
 * * They allow us to pass data from a Parent Component (Body) to a Child Component (ResCard).
 */


// Inline Style is not allowed in JSX we have go for JS Object to pass in the style
const cardStyle = {
  background: "#f0f0f0",
};

const ResCard = (props) => {
  //those props come from the component where it is being defined as artribute in parent component 
  //props is just js object we can use them in JSX with {} to print data from it.This is very powerful
  console.log(props);
  console.log(props.resData); //this is where we actual passing our data

  // we can also directly decrustruct this object in funtion parameter Of Component like:
  // ResCard = ({name , cuisine}) => {return JSX} and use them directly by calling them since props is just a object
  // const { nameOfRes, cuisine , resData } = props;  // this is the manual way  of getting  data 

  //Here This Contain real time Data We gonna use Real time data
  // ! DESTRUCTURING: Extracting data from props object for cleaner code
  const {name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } = props.resData?.info; //this is the reecommoded way dynamically passing data
  // * Optional Chaining (?.) ensures app doesn't crash if data is missing
  return (
    <div className="res-card" style={cardStyle} >
      <img
        className="res-Card-img"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />

      <h3>{name}</h3>
      {/* .join() is used because cuisines is an Array */}
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>delivery in {sla?.deliveryTime} min</h4>
    </div>
  );
};


// * --- BODY COMPONENT ---
const Body = () => {
  return (
    <div className="body">
      {/* We will implement search in next Chapter */}
      <div className="Search">Search</div>
      <div className="res-container">

          
         {/* This is manualy passing data This will be cconverted into key pair and then goes into props obj  which will be avilable in ResCard component 
          <ResCard
          nameOfRes="demo Card"
          cuisine="Cuisuines1 , Cuisuines2 ,Cuisuines3 "
          rateing = "696969"
          time = "1000"
          key="1"
        />
         */}
          

        
        {/*
        This is the dynamically passing data i.e is passing  the Data object 
        --> we can call card like this but better we loop them Or map them 
        you can test it by uncommenting it 
        */}
        {/*
        <ResCard resData={realTimeRestarantData[1]}/>
        <ResCard resData={realTimeRestarantData[2]}/>
        <ResCard resData={realTimeRestarantData[3]}/>
        <ResCard resData={realTimeRestarantData[4]}/>
        <ResCard resData={realTimeRestarantData[5]}/>
        <ResCard resData={realTimeRestarantData[6]}/>
        <ResCard resData={realTimeRestarantData[7]}/>  
        */}

        {/* *
         * ! THE POWER OF .MAP()
         * * We loop through our data array (resList) and return a ResCard for each item.
         * * ? WHY 'KEY' IS MANDATORY?
         * * React needs a unique 'key' for each item in a list to optimize rendering.
         * * Best Practice: Use unique IDs from your data (obj.info.id).
         * * Never use Index as a key (unstable for re-ordering will learn about it in upcoming chapters).
         */}
        {realTimeRestarantData.map((obj) => (
          <ResCard resData={obj}  key={obj.info.id} />
        ))}
        {/* Evry time we do looping  always we have to pass a key */}
        {/* priority--->  not using key(not acceptable) <<<<<< index as key(not best way) <<<<<< unique id (best practice) */}

      </div>
    </div>
  );
};


//This is our root Component Where All Component will be injected Here By their Hyrerchy
// * --- ROOT APP LAYOUT ---
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* Footer component can be added here later */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);





