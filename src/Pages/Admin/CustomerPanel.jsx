import Title from "../../Components/Title";


const CustomerPanel = () => {
    return (
        <div className="mt-10">
            <Title title1={''} title2={'Customer Panel'}></Title>
            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Registrar</th>
                            <th>Address</th>
                            <th>Contact Info</th>
                            <th>Last Login</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>1-800-555-1234</td>
                            <td>2021-01-01</td>
                            <td className="flex flex-row justify-start gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>

                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>1-800-555-1234</td>
                            <td>2021-01-01</td>
                            <td className="flex flex-row justify-start gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>

                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>1-800-555-1234</td>
                            <td>2021-01-01</td>
                            <td className="flex flex-row justify-start gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>

                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>1-800-555-1234</td>
                            <td>2021-01-01</td>
                            <td className="flex flex-row justify-start gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>

                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>1-800-555-1234</td>
                            <td>2021-01-01</td>
                            <td className="flex flex-row justify-start gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>

                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>1-800-555-1234</td>
                            <td>2021-01-01</td>
                            <td className="flex flex-row justify-start gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>

                        </tr>
                        <tr>
                            <th>7</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>1-800-555-1234</td>
                            <td>2021-01-01</td>
                            <td className="flex flex-row justify-start gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>

                        </tr>
                        <tr>
                            <th>8</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>1-800-555-1234</td>
                            <td>2021-01-01</td>
                            <td className="flex flex-row justify-start gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>

                        </tr>
                        <tr>
                            <th>9</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>1-800-555-1234</td>
                            <td>2021-01-01</td>
                            <td className="flex flex-row justify-start gap-1">
                                <button className="btn btn-outline btn-info  btn-xs ">Remove</button>
                                <button className="btn btn-outline btn-error  btn-xs ">Ban</button>
                                <button className="btn btn-outline btn-warning btn-xs " >Suspend</button>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerPanel;