module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';

    cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        img: {
            type: dataTypes.STRING,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }

    let config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.belongsTo(models.Category,
            {
                as: 'product_category',
                foreignKey: 'category_id'
            }
        );
    }
    
    return Product;
}