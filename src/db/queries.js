const dbCreationQuery={
  regionsTable:'CREATE TABLE regions( region_id serial PRIMARY KEY, region_name VARCHAR(255), UNIQUE NOT NULL);',
  productsTable:`CREATE TABLE products(product_id serial PRIMARY KEY, product_name VARCHAR (255) UNIQUE NOT NULL);`,
  priceDetailsTable:`CREATE TABLE price_details(
    region_id INT NOT NULL,
    product_id INT NOT NULL,
    pellet_price NUMERIC(5,2) NOT NULL,
    mash_price  NUMERIC(5,2) NOT NULL,
    PRIMARY KEY(region_id,product_id),
    FOREIGN KEY (region_id) REFERENCES regions(region_id),
   FOREIGN KEY (product_id ) REFERENCES products(product_id)
 ); `,
 productDetailsTable:`CREATE TABLE product_details(
    region_id INT NOT NULL,
    product_id INT NOT NULL,
    sku_in_kgs INT NOT NULL,
    pellet_size INT NOT NULL,
    packing_type VARCHAR(16) NOT NULL,
    PRIMARY KEY(region_id,product_id),
    FOREIGN KEY (region_id) REFERENCES regions(region_id),
   FOREIGN KEY (product_id ) REFERENCES products(product_id)
 );`
}

const getProductDetailsByPId=`SELECT region_name,product_name,sku_in_kgs,pellet_size,packing_type,pellet_price,mash_price FROM product_details 
                              INNER JOIN products ON products.product_id = product_details.product_id 
                              INNER JOIN price_details ON price_details.product_id = product_details.product_id
                              INNER JOIN regions ON regions.region_id=product_details.region_id 
                              where product_details.product_id=$1`;

const getProductDetailsByRegion=`SELECT region_name,product_name,sku_in_kgs,pellet_size,packing_type,pellet_price,mash_price FROM product_details 
                                JOIN price_details ON product_details.region_id = price_details.region_id and product_details.product_id = price_details.product_id
                                JOIN regions ON product_details.region_id=regions.region_id
                                JOIN products ON product_details.product_id=products.product_id where region_name=$1`;
                    

module.exports={getProductDetailsByPId,getProductDetailsByRegion}