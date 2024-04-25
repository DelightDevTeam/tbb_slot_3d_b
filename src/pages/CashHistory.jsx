import React from 'react'
import { Tab, Table, Tabs } from 'react-bootstrap'

const CashHistoryPage = () => {
    const historyData = [
        {
            id: 'all',
            title: 'အားလုံး',
            data: ''
        },
        {
            id: 'top up',
            title: 'ငွေသွင်း',
            data: ''
        }, {
            id: 'with draw',
            title: 'ငွေထုတ်',
            data: ''
        },
    ]
  return (
    <div>
       <Tabs
                defaultActiveKey="all"
                id="uncontrolled-tab-example"
                className="mb-3 customTabs"

            >

                {historyData.map((item) => {
                    return <Tab eventKey={item.id} title={item.title}>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Amount</th>
                                    <th>New Balance</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>{new Date().toDateString()}</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>{new Date().toDateString()}</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td >Larry the Bird</td>
                                    <td >Harry</td>
                                    <td>{new Date().toDateString()}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                })}


            </Tabs>
    </div>
  )
}

export default CashHistoryPage
