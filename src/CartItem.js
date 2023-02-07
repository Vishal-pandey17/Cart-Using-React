import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();// this will call the constructor of component class 
        this.state = {
            price: 999,
            title: "PHONE",
            qty: 1,
            img: ' '
        }
    } 
    increaseQuantity(){
        console.log(this.state);
    }
    render () {
        const {price, title, qty} = this.state // object destructuring
      return (
          <div className='cart-item'>
            <div className='left-block'>
            <img style={styles.image}/>
            </div>
            <div className='right-block'>
              <div style={{ fontSize: 25 }}>
                 {this.state.title}
              </div>
              <div style={{color: '#777'}}>
                 Rs {price}
              </div>
              <div style={{color: '#777'}}>
                 Qty: {qty}
              </div> 
              <div className='cart-item-actions'>
               <img alt='Increase' className='action-icons' src='https://t3.ftcdn.net/jpg/03/30/25/74/240_F_330257485_WEd8LDmLkdp4vbJjhbLY263gV0OvsiIF.jpg' onClick={this.increaseQuantity.bind(this)}/>
               <img alt='Decrease' className='action-icons' src='https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg' />
               <img alt='delete' className='action-icons' src='https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg' />
              </div>
            </div>
          </div>
      );
    }
}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;