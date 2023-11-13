// import sequelize from "sequelize"
// import { CartProduct } from "src/cart/entities/cart_product.entity"
// import { Commission } from "src/commission/entities/commission.entity"
// import { Order } from "src/order/entities/order.entity"
// import { Product } from "src/product/entities/product.entity"
// import { orderStatus } from "src/utils/constants"

// const dotenv = require('dotenv')


// dotenv.config()


// async function main() {

//     try {
//         let dispatchedProducts = await Product.findAll({
//             attributes:  [
//                 'id',
//                 'name',
//                 'categoryId',
//                 'price',
//                 'offer',
//                 [
//                   sequelize.literal(
//                     `
//                     (
//                         SELECT  "commission"
//                         FROM public."CategoryCommissions" 
//                         WHERE "categoryId" = "Product"."categoryId"
                        
//                     )
//                     `
//                 ),
//                 'commission_percentage'
//           ],
     
                    
//           ],  
//             include: [
//                 {
//                     model: Order,
//                     where: {
//                         status: orderStatus.ORDER_DISPATCHED
//                     }
//                 },
                
            
//         ]
//         })
    
//         let commissions = dispatchedProducts.map((p) => {
//             let data = p.toJSON()
//             let commission = data.categoryId != null ? data.commission_percentage ?? 0 : 0
//             return {
//                 businessId: p.vendorOrder.businessId,
//                 amount: parseFloat((p.amount * p.quantity * commission).toFixed(2)) ,
//                 type: 2,
//                 percentage: commission,
//                 categoryId: data.categoryId

//             }
//         })

//         let result = await Commission.bulkCreate(commissions)

//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }

// }


// main()