import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import testImg from '../assets/static/logo.png';
import { Link } from 'react-router-dom';

const CategoryTable = ({ categories }) => {
    return (
        <div>
            <table className="table table-sm table-responsive-md">
                <thead>
                    <tr>
                        <td className="text-center"><p>SL</p></td>
                        <td><p>Image</p></td>
                        <td><p>Name</p></td>
                        <td className="text-center"><p>Album</p></td>
                        <td className="text-center"><p>Songs</p></td>
                        <td className="text-center"><p>Action</p></td>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 && categories.map((category, i) =>
                        <tr key={i}>
                            <td className="text-center"><p>{i + 1}</p></td>
                            <td>
                                <img src={testImg} alt="..." />
                            </td>
                            <td><p>{category.name}</p></td>
                            <td className="text-center"><p>12</p></td>
                            <td className="text-center"><p>12</p></td>
                            <td className="text-center">
                                <Dropdown drop="left">
                                    <Dropdown.Toggle className="btn btn-light rounded-0 shadow-none">
                                        Action
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="p-0 border-0 rounded-0 shadow">
                                        <Dropdown.Item as={Link} to={`/admin/category/${category.id}/edit`} className="p-2">
                                            <span className="ml-1">Edit</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" className="p-2">
                                            <span className="ml-1">Delete</span>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryTable;