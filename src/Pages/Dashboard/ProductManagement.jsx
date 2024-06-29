
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Title from "../../Components/Title";
import { MdAddCircle } from "react-icons/md";
import Swal from "sweetalert2";

const ProductManagement = () => {
    const handleDelete = (id) => {
        console.log(id);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You want remove this package!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, remove it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Removed successfully"
                });

            }

        });
    }
    return (
        <div className="mt-10">
            <Title title1={''} title2={'product Management'}></Title>
            <Link to={'/dashboard/add-product'} className="flex flex-row items-center gap-1 justify-end text-2xl mt-20 mr-5"><MdAddCircle className="text-green-500 text-3xl"/>Add product</Link>
            <div className="overflow-x-auto mt-5">
                <table className="table border-2 ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg">
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td><Link to={'/dashboard/update-product'}>
                                <GrUpdate />
                            </Link></td>
                            <td className="text-2xl">
                                <button onClick={handleDelete}><RiDeleteBinFill /></button>
                            </td>

                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                            <td><Link to={'/dashboard/update-product'}>
                                <GrUpdate />
                            </Link></td>
                            <td className="text-2xl">
                                <button onClick={handleDelete}><RiDeleteBinFill /></button>
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                            <td><Link to={'/dashboard/update-product'}>
                                <GrUpdate />
                            </Link></td>
                            <td className="text-2xl">
                                <button onClick={handleDelete}><RiDeleteBinFill /></button>
                            </td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>4</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                            <td><Link to={'/dashboard/update-product'}>
                                <GrUpdate />
                            </Link></td>
                            <td className="text-2xl">
                                <button onClick={handleDelete}><RiDeleteBinFill /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManagement;