const {dbClient}=require('../db/connection');
const {getProductDetailsByPId,getProductDetailsByRegion}=require('../db/queries');
const getProductsByRegion =async(req,res)=>{
    try{
        const {region}=req.query;
        if(!region)return res.status(400).json({err:"query parameter region is missing"});
        const dbRes=await dbClient.query(getProductDetailsByRegion,[region]);
        return res.json({productList:dbRes.rows})
    }catch(err){
        res.status(400).json({err:"something broke"})
    }
    
};

const getProductsByPId =async(req,res)=>{
    try{
        const {pId}=req.query;
        if(!pId)return res.status(400).json({err:"query parameter pId is missing"});
        const id=parseInt(pId);
        if(Number.isNaN(id))return res.status(400).json({err:"pId should be value of Number"});
        const dbRes=await dbClient.query(getProductDetailsByPId,[pId]);
        return res.json({productList:dbRes.rows})
    }catch(err){
        res.status(500).json({err:"something broke"})
    }
    
};

module.exports={getProductsByRegion,getProductsByPId}