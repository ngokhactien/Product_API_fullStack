import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem(props) {

    const { product, index } = props;
    const statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
    const statusClass = product.status ? 'warning' : 'default';

    const onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            console.log(id);
            props.onDelete(id);
        }
    }
    
    return (
        <tr>
            <td>{index + 1}</td>
            {/* <td>{product.id}</td> */}
            <td>{product.name}</td>
            <td>{product.price} $</td>
            <td>
                <span className={`label label-${statusClass}`}>
                    {statusName}
                </span>
            </td>
            <td>
                <Link
                    to={`/product/${product._id}/edit`}
                    className="btn btn-success mr-10"
                >
                    Sửa
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onDelete(product._id)}
                >
                    
                    Xóa
                </button>
            </td>
        </tr>
    );
}

