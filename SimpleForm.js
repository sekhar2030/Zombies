import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
class SimpleForm extends Component {
    render() {
        try {
      return (
        <ChatBot 
         steps={[
           
           {
            id:'1', 
            message:'Hi! I am little Zombie, a friendly bot, and I am here to assist you.', 
            trigger:'2',
           },
           {
            id:'2', 
            message:'Please provide your name?', 
            trigger: '3',
           },
           {
            id:'3', 
            user:true,
            trigger:'4',
           },
           {
            id: '4',
            message: 'Thanks {previousValue}, for providing us your information',
            trigger: '5',
           },
           {
            id:'5', 
            message:'Which course you looking for', 
            trigger:'6',
           },
           {
            id:'6', 
            user:true,
            end:true,
            
           },
           ]}
        />
      );
      
          
      } catch (error) {
         console.log(error);
      }
      
    }
         
  }
  

export default SimpleForm;