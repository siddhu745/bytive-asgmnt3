import {MailOutlined,PhoneOutlined,GlobalOutlined} from '@ant-design/icons';



const Description = (props) => {

    const style={
        fontSize : 18,
        paddingRight:5
    }
    return(
        <div className='description'>
        <div className='line'><MailOutlined style={style}/>{props.email}</div>
        <div className='line'><PhoneOutlined style={style}/>{props.phone}</div>
        <div className='line'><GlobalOutlined style={style}/>{props.website}</div>
        
        
        </div>
    )
}

export default Description;