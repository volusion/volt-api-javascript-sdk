module.exports = {
    // TODO
}

// {
//     deliveryMethod: 'Free Shipping',
//     paymentMethod: 'Cash',
//     purchaseOrderNumber: '',
//     placedBy: {
//       firstName: 'John',
//       lastName: 'Smith',
//       phoneNumber: '1231231234',
//       address: {
//         address: {
//           country: '',
//           state: '',
//           postalCode: ''
//         },
//         country: 'US',
//         state: 'TX',
//         address1: '123 Maple Street',
//         address2: '',
//         city: 'Austin',
//         postalCode: '78758'
//       },
//       mapLink: 'https://www.google.com/maps/place/',
//       mapSrc: 'https://maps.googleapis.com/maps/api/staticmap?center=&scale=2&zoom=14&maptype=roadmap&markers=&key=AIzaSyBVvRYGnSTIFppjaVB_qmdi8Enl5suNW4s&size=300x300',
//       company: '',
//       emailAddress: 'john-108371@test.com'
//     },
//     deliverTo: {
//       firstName: 'John',
//       lastName: 'Smith',
//       phoneNumber: '1231231234',
//       address: {
//         address: {
//           country: '',
//           state: '',
//           postalCode: ''
//         },
//         country: 'US',
//         state: 'TX',
//         address1: '123 Maple Street',
//         address2: '',
//         city: 'Austin',
//         postalCode: '78758'
//       },
//       mapLink: 'https://www.google.com/maps/place/',
//       mapSrc: 'https://maps.googleapis.com/maps/api/staticmap?center=&scale=2&zoom=14&maptype=roadmap&markers=&key=AIzaSyBVvRYGnSTIFppjaVB_qmdi8Enl5suNW4s&size=300x300',
//       company: ''
//     },
//     cart: {
//       items: [
//         {
//           quantity: 1,
//           product: {
//             categoryIds: [],
//             descriptions: {
//               extended: '',
//               'long': '',
//               'short': ''
//             },
//             fulfillmentData: {
//               sourceId: null,
//               sourceMethod: null,
//               sourceName: null,
//               sourceRedirectAppKey: null,
//               sourceRedirectUrl: null,
//               sourceSku: null
//             },
//             images: [],
//             isTaxable: true,
//             name: 'test add',
//             price: 19,
//             pricing: {
//               listPrice: 19
//             },
//             productVariants: [
//               {
//                 fulfillmentData: {
//                   sourceId: null,
//                   sourceMethod: null,
//                   sourceName: null,
//                   sourceRedirectAppKey: null,
//                   sourceRedirectUrl: null,
//                   sourceSku: null
//                 },
//                 imageLinkIds: [],
//                 isInventoryTracked: false,
//                 price: null,
//                 quantity: 0,
//                 sku: 'test-add',
//                 skuImageLinkIds: [],
//                 variants: [],
//                 id: '59f32ebeebd297071cd2d0ed'
//               }
//             ],
//             relatedProductIds: [],
//             requiresShipping: true,
//             sku: 'test-add',
//             state: 'Active',
//             variantOptions: [],
//             weight: 0,
//             productVariantId: '59f32ebeebd297071cd2d0ed',
//             seoFriendlyName: 'test-add',
//             variants: [],
//             id: '59f32ebeebd297071cd2d0ee'
//           }
//         }
//       ],
//       taxRate: 0.0825,
//       taxAmount: 1.16,
//       revision: 5,
//       postalCode: '78758',
//       state: 'TX',
//       country: 'US',
//       discounts: [
//         {
//           discount: {
//             createdOn: '2019-05-01T22:04:38.868Z',
//             criteria: {
//               minimumPurchaseQuantity: 0,
//               requiresCouponCode: false
//             },
//             currentUsageCount: 0,
//             discountType: 'fixed',
//             fixedPriceReduction: 5,
//             hasEndDateTime: false,
//             hasStartDateTime: false,
//             isActive: true,
//             isHidden: false,
//             isLimitedPerCustomer: false,
//             percentagePriceReduction: 0,
//             revision: 3,
//             scope: {
//               entireStore: true,
//               items: []
//             },
//             tenant: '591f5a8cd6f2e70010c3fcbb',
//             totalUsageCount: 0,
//             unlimited: true,
//             unlimitedDuration: true,
//             updatedOn: '2019-05-08T21:54:31.044Z',
//             name: 'D5OFF',
//             status: {
//               code: 'live',
//               text: 'Live',
//               desc: 'This discount is live'
//             },
//             duration: 'Unlimited',
//             usesLeft: 'Unlimited',
//             id: '5cca17f6087e4eb2ef12aeaf'
//           },
//           discountAmount: 5
//         }
//       ],
//       createdOn: '2020-04-15T03:06:34.389Z',
//       updatedOn: '2020-04-15T03:08:38.707Z',
//       id: '5e967a3ae684d26f8855add4',
//       availableShippingMethods: [
//         {
//           name: 'Free Shipping',
//           deliveryEstimate: '3-5 Business Days',
//           shippingPrice: 0,
//           shippingZones: {
//             include: [
//               'US',
//               'US-AL',
//               'US-AK',
//               'US-AZ',
//               'US-AR',
//               'US-CA',
//               'US-CO',
//               'US-CT',
//               'US-DE',
//               'US-DC',
//               'US-FM',
//               'US-FL',
//               'US-GA',
//               'US-GU',
//               'US-HI',
//               'US-ID',
//               'US-IL',
//               'US-IN',
//               'US-IA',
//               'US-KS',
//               'US-KY',
//               'US-LA',
//               'US-ME',
//               'US-MH',
//               'US-MD',
//               'US-MA',
//               'US-MI',
//               'US-MN',
//               'US-MS',
//               'US-MO',
//               'US-MT',
//               'US-NE',
//               'US-NV',
//               'US-NH',
//               'US-NJ',
//               'US-NM',
//               'US-NY',
//               'US-NC',
//               'US-ND',
//               'US-MP',
//               'US-OH',
//               'US-OK',
//               'US-OR',
//               'US-PW',
//               'US-PA',
//               'US-PR',
//               'US-RI',
//               'US-SC',
//               'US-SD',
//               'US-TN',
//               'US-TX',
//               'US-UT',
//               'US-VT',
//               'US-VA',
//               'US-WA',
//               'US-WV',
//               'US-WI',
//               'US-WY',
//               'US-VI',
//               'US-AA',
//               'US-AE',
//               'US-AP',
//               'AU',
//               'AU-ACT',
//               'AU-NSW',
//               'AU-NT',
//               'AU-QLD',
//               'AU-SA',
//               'AU-TAS',
//               'AU-VIC',
//               'AU-WA',
//               'CK',
//               'FJ',
//               'KI',
//               'NC',
//               'NF',
//               'NR',
//               'NU',
//               'NZ',
//               'NZ-AUK',
//               'NZ-BOP',
//               'NZ-CAN',
//               'NZ-GIS',
//               'NZ-HKB',
//               'NZ-MWT',
//               'NZ-MBH',
//               'NZ-NSN',
//               'NZ-NTL',
//               'NZ-OTA',
//               'NZ-STL',
//               'NZ-TKI',
//               'NZ-TAS',
//               'NZ-WKO',
//               'NZ-WGN',
//               'NZ-WTC',
//               'PF',
//               'PG',
//               'PN',
//               'SB',
//               'TK',
//               'TO',
//               'TV',
//               'UM',
//               'VU',
//               'WF',
//               'WS'
//             ]
//           },
//           id: '5d570592d28be99494940e23'
//         }
//       ],
//       discount: {
//         createdOn: '2019-05-01T22:04:38.868Z',
//         criteria: {
//           minimumPurchaseQuantity: 0,
//           requiresCouponCode: false
//         },
//         currentUsageCount: 0,
//         discountType: 'fixed',
//         fixedPriceReduction: 5,
//         hasEndDateTime: false,
//         hasStartDateTime: false,
//         isActive: true,
//         isHidden: false,
//         isLimitedPerCustomer: false,
//         percentagePriceReduction: 0,
//         revision: 3,
//         scope: {
//           entireStore: true,
//           items: []
//         },
//         tenant: '591f5a8cd6f2e70010c3fcbb',
//         totalUsageCount: 0,
//         unlimited: true,
//         unlimitedDuration: true,
//         updatedOn: '2019-05-08T21:54:31.044Z',
//         name: 'D5OFF',
//         status: {
//           code: 'live',
//           text: 'Live',
//           desc: 'This discount is live'
//         },
//         duration: 'Unlimited',
//         usesLeft: 'Unlimited',
//         id: '5cca17f6087e4eb2ef12aeaf'
//       },
//       shippingAddress: {
//         country: 'US',
//         state: 'TX'
//       },
//       shippingMethod: {
//         name: 'Free Shipping',
//         shippingBand: {
//           shippingPrice: 0
//         },
//         shippingCost: 0,
//         _id: '5d570592d28be99494940e23',
//         id: '5d570592d28be99494940e23'
//       },
//       totalItems: 1,
//       total: 14,
//       grandTotal: 15.16,
//       discountAmount: 5,
//       messages: [],
//       totalWithoutReductions: 19
//     },
//     merchantNote: '',
//     requestId: '2806f94ae5e14d968cc6'
//   }