import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";


const ContactPage = () => {
  return (
     <div className="contact-box">
      <div className="contact-left">
        <h3>Send us email</h3>
        <form action="https://formspree.io/f/xdovkvrj" method="POST">
          <div className="input-row">
            <div className="input-group">
              <label for="">Name</label>
              <input type="text" placeholder="Sneak Peek" name="Name" />
            </div>
            <div className="input-group">
              <label for="">Phone</label>
              <input type="text" placeholder="123-123-123" name="Phone no" />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label for="">Email</label>
              <input
                type="email"
                placeholder="sneakpeek@gmail.com"
                name="Email"
              />
            </div>
            <div className="input-group">
              <label for="">Subject</label>
              <input type="text" placeholder="Any issue!!" name="Subject" />
            </div>
          </div>
          <label for="">Message</label>
          <textarea
        
            placeholder="Share your thoughts here and lace up your message with SneakPeek flair..."
            rows="5"
            name="Message"
          ></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
      <div className="contact-right">
        <h3>Just reach me!!!</h3>
        <table>
          <tr>
            <td><MdEmail/></td>
            <td>
              <a target="_blank" href="mailto:anantsingh3366@gmail.com"
                >anantsingh3346@gamil.com</a
              >
            </td>
          </tr>
          <tr>
            <td><FaLinkedinIn/></td>
            <td>
              <a
                href="https://www.linkedin.com/in/anant-singh-64b45420a/"
                target="_blank"
                >Anant Singh</a
              >
            </td>
          </tr>
          <tr>
            <td><FaGithub/></td>
            <td>
              <a target="_blank" href="https://github.com/singh-anant"
                >Anant-Singh1</a
              >
            </td>
          </tr>
          <tr>
            <td><FaMedium/></td>
            <td>
              <a target="_blank" href="https://medium.com/@anantsingh3346"
                >anantsingh3346</a
              >
            </td>
          </tr>
          <tr>
            <td><TbBrandLeetcode/></td>
            <td>
              <a target="_blank" href="https://leetcode.com/singh-anant/"
                >Anant-Singh1</a
              >
            </td>
          </tr>

          <tr>
            <td><FaXTwitter/></td>
            <td>
              <a target="_blank" href="https://mobile.twitter.com/Anant__Singh_"
                >@Anant__Singh_</a
              >
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default ContactPage
