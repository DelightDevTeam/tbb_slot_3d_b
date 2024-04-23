import React from 'react'
import { Table } from 'react-bootstrap'

const ThreeDBetHistoryPage = () => {
  return (
    <div className='px-2 px-sm-5'>
        <h5 className="text-center fw-bold mt-4 mb-4">3D  ထီထိုးမှတ်တမ်း</h5>
        <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>စဉ်</th>
                        <th>နံပါတ်</th>
                        <th>ပမာဏ</th>
                        <th>ရက်စွဲ</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>100</td>
                        <td>500</td>
                        <td>23/4/2024</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>100</td>
                        <td>500</td>
                        <td>23/4/2024</td>
                    </tr>

                </tbody>
            </Table>
    </div>
  )
}

export default ThreeDBetHistoryPage
