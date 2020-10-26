import { faChartBar, faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faChartPie,
  faCloudDownloadAlt,
  faCog,
  faComments,
  faMinus,
  faShoppingBasket,
  faShoppingCart,
  faTag,
  faThumbsUp,
  faTimes,
  faUserPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Table,
} from 'reactstrap';
import LteContent from '../../src/components/LteContent';
import LteContentHeader from '../../src/components/LteContentHeader';
import LteInfoBox from '../../src/components/LteInfoBox';
import LteSmallBox from '../../src/components/LteSmallBox';
import { user1, user3, user5, user6, user7, user8 } from '../data/images';
import LteDirectChatMsg from '../../src/components/directchat/LteDirectChatMsg';
import LteDirectChatMessages from '../../src/components/directchat/LteDirectChatMessages';
import LteDirectChat from '../../src/components/directchat/LteDirectChat';
import LteDirectChatContacts from '../../src/components/directchat/LteDirectChatContacts';
import LteContactsList from '../../src/components/directchat/LteContactsList';
import LteContactsListItem from '../../src/components/directchat/LteContactsListItem';

export default function DemoDashboard() {
  return (
    <>
      <LteContentHeader title='Dashboard' />
      <LteContent>
        <Row>
          <Col lg='3' xs='6'>
            <LteSmallBox title='150' message='New Orders' href='/info' icon={faShoppingBasket} color='info' />
          </Col>
          <Col lg='3' xs='6'>
            <LteSmallBox title='53%' message='Bounce Rate' href='/info' icon={faChartBar} color='success' />
          </Col>
          <Col lg='3' xs='6'>
            <LteSmallBox title='44' message='User Registrations' href='/info' icon={faUserPlus} color='warning' />
          </Col>
          <Col lg='3' xs='6'>
            <LteSmallBox title='65' message='Unique Visitors' href='/info' icon={faChartPie} color='danger' />
          </Col>
        </Row>

        <Row>
          <Col xs='12' sm='6' md='3'>
            <LteInfoBox icon={faCog} text='CPU Traffic' number='10%' iconColor='info' />
          </Col>
          <Col xs='12' sm='6' md='3'>
            <LteInfoBox icon={faThumbsUp} text='Likes' number='41,410' iconColor='danger' />
          </Col>
          <div className='clearfix hidden-md-up' />
          <Col xs='12' sm='6' md='3'>
            <LteInfoBox icon={faShoppingCart} text='Sales' number='760' iconColor='success' />
          </Col>
          <Col xs='12' sm='6' md='3'>
            <LteInfoBox icon={faUsers} text='New Members' number='2,000' iconColor='warning' />
          </Col>
        </Row>

        <Row>
          <Col lg='8'>
            <Card>
              <CardHeader className='border-transparent'>
                <CardTitle>Latest Orders</CardTitle>
                <div className='card-tools'>
                  <button type='button' className='btn btn-tool' data-card-widget='collapse'>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <button type='button' className='btn btn-tool' data-card-widget='remove'>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </CardHeader>
              <CardBody className='p-0'>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Item</th>
                      <th>Status</th>
                      <th>Popularity</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>OR9842</td>
                      <td>Call of Duty IV</td>
                      <td>
                        <Badge tag='span' color='success'>
                          Shipped
                        </Badge>
                      </td>
                      <td>
                        <div className='sparkbar' data-color='#00a65a' data-height='20'>
                          90,80,90,-70,61,-83,63
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>OR1848</td>
                      <td>Samsung Smart TV</td>
                      <td>
                        <Badge tag='span' color='warning'>
                          Pending
                        </Badge>
                      </td>
                      <td>
                        <div className='sparkbar' data-color='#f39c12' data-height='20'>
                          90,80,-90,70,61,-83,68
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>OR7429</td>
                      <td>iPhone 6 Plus</td>
                      <td>
                        <Badge tag='span' color='danger'>
                          Delivered
                        </Badge>
                      </td>
                      <td>
                        <div className='sparkbar' data-color='#f56954' data-height='20'>
                          90,-80,90,70,-61,83,63
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>OR7429</td>
                      <td>Samsung Smart TV</td>
                      <td>
                        <Badge tag='span' color='info'>
                          Processing
                        </Badge>
                      </td>
                      <td>
                        <div className='sparkbar' data-color='#00c0ef' data-height='20'>
                          90,80,-90,70,-61,83,63
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>OR1848</td>
                      <td>Samsung Smart TV</td>
                      <td>
                        <Badge tag='span' color='warning'>
                          Pending
                        </Badge>
                      </td>
                      <td>
                        <div className='sparkbar' data-color='#f39c12' data-height='20'>
                          90,80,-90,70,61,-83,68
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>OR7429</td>
                      <td>iPhone 6 Plus</td>
                      <td>
                        <Badge tag='span' color='danger'>
                          Delivered
                        </Badge>
                      </td>
                      <td>
                        <div className='sparkbar' data-color='#f56954' data-height='20'>
                          90,-80,90,70,-61,83,63
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>OR9842</td>
                      <td>Call of Duty IV</td>
                      <td>
                        <Badge tag='span' color='success'>
                          Shipped
                        </Badge>
                      </td>
                      <td>
                        <div className='sparkbar' data-color='#00a65a' data-height='20'>
                          90,80,90,-70,61,-83,63
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>

            <Row>
              <Col lg='6'>
                <LteDirectChat color='warning'>
                  <CardHeader>
                    <CardTitle>Direct Chat</CardTitle>
                    <div className='card-tools'>
                      <Badge color='warning' data-toggle='tooltip' title='3 New Messages'>
                        3
                      </Badge>
                      <Button className='btn-tool' color='' data-card-widget='collapse'>
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                      <Button
                        color=''
                        className='btn-tool'
                        data-toggle='tooltip'
                        title='Contacts'
                        data-widget='chat-pane-toggle'
                      >
                        <FontAwesomeIcon icon={faComments} />
                      </Button>
                      <Button color='' className='btn-tool' data-card-widget='remove'>
                        <FontAwesomeIcon icon={faTimes} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <LteDirectChatMessages>
                      <LteDirectChatMsg
                        name='Alexander Pierce'
                        date='23 Jan 2:00 pm'
                        image={user1}
                        message="Is this template really for free? That's unbelievable!"
                      />
                      <LteDirectChatMsg
                        right
                        name='Sarah Bullock'
                        date='23 Jan 2:05 pm'
                        image={user3}
                        message='You better believe it!'
                      />
                      <LteDirectChatMsg
                        name='Alexander Pierce'
                        date='23 Jan 5:37 pm'
                        image={user1}
                        message='Working with AdminLTE on a great new app! Wanna join?'
                      />
                      <LteDirectChatMsg
                        right
                        name='Sarah Bullock'
                        date='23 Jan 6:10 pm'
                        image={user3}
                        message='I would love to.'
                      />
                    </LteDirectChatMessages>
                    <LteDirectChatContacts>
                      <LteContactsList>
                        <LteContactsListItem
                          href='/contacts'
                          image={user1}
                          name='Count Dracula'
                          date='2/28/2015'
                          message='How have you been? I was...'
                        />
                        <LteContactsListItem
                          href='/contacts'
                          image={user7}
                          name='Sarah Doe'
                          date='2/23/2015'
                          message='I will be waiting for...'
                        />
                        <LteContactsListItem
                          href='/contacts'
                          image={user3}
                          name='Nadia Jolie'
                          date='2/20/2015'
                          message="I'll call you back at..."
                        />
                        <LteContactsListItem
                          href='/contacts'
                          image={user5}
                          name='Nora S. Vans'
                          date='2/10/2015'
                          message='Where is your new...'
                        />
                        <LteContactsListItem
                          href='/contacts'
                          image={user6}
                          name='John K.'
                          date='1/27/2015'
                          message='Can I take a look at...'
                        />
                        <LteContactsListItem
                          href='/contacts'
                          image={user8}
                          name='Kenneth M.'
                          date='1/4/2015'
                          message='Never mind I found...'
                        />
                      </LteContactsList>
                    </LteDirectChatContacts>
                  </CardBody>
                  <CardFooter>
                    <Form>
                      <InputGroup>
                        <Input placeholder='Type Message ...' />
                        <InputGroupAddon addonType='append'>
                          <Button color='warning'>Send</Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Form>
                  </CardFooter>
                </LteDirectChat>
              </Col>
              <Col lg='6' />
            </Row>
          </Col>
          <Col lg='4'>
            <LteInfoBox icon={faTag} text='Inventory' number='5,200' bgColor='warning' />
            <LteInfoBox icon={faHeart} text='Mentions' number='92,050' bgColor='success' />
            <LteInfoBox icon={faCloudDownloadAlt} text='Downloads' number='114,381' bgColor='danger' />
            <LteInfoBox icon={faComment} text='Direct Messages' number='163,921' bgColor='info' />
          </Col>
        </Row>
      </LteContent>
    </>
  );
}
