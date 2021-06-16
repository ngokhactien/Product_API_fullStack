import React , {useEffect}  from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';

function ProductListPage(props){
    
    useEffect(()=>{
        props.fetchAllProducts();
    },[]);

    const onDelete = (id) => {
        props.onDeleteProduct(id);
        props.fetchAllProducts();
    }

    const showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={onDelete}
                    />
                );
            });
        }
        return result;
    }

    const { products } = props;
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to="/product/add" className="btn btn-info mb-10">
                Thêm Sản Phẩm
            </Link>
            <ProductList>
                {showProducts(products)}
            </ProductList>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct : (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
