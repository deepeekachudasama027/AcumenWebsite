
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


var id23 = document.getElementById("id23");
var btn23 = document.getElementById("b23");
var id22 = document.getElementById("id22");
var btn22 = document.getElementById("b22");
// var id21 = document.getElementById("id21");
// var btn21 = document.getElementById("b21");
var b = document.getElementById("dropdownMenu2");

function func23(){
    b.innerHTML = "Batch 2023";
    document.getElementById("team").innerHTML = 
   ` <div id = "id23">
   <div class="row h-100 justify-content-center align-items-center">
     <div class="col-12 col-sm-6 col-md-4 col-lg-3">
     <div class="outer-div">
       <div class="inner-div">
         <div class="front">
           <div class="front__bkg-photo"></div>
           <div class="front__face-photo" style="background: url(images/Faculty-Advisor/Dr.USR.jpg) no-repeat; background-size: contain;">
           </div>
           <div class="front__text">
             <h3 class="front__text-header">Dr. U Srinivasulu Reddy</h3>
             <h4><p class="front__text-para">Staff Advisor</p></h4>
          </div>
         </div>
         <div class="back">
           <div class="social-media-wrapper">
              <a href="https://www.linkedin.com/in/srinivasulu-reddy-288666158/" target="_blank" class="social-icon"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
               </div>
         </div>
       </div>
     </div>
     </div>
   </div>
   <div class="row h-100 justify-content-center align-items-center">
   <div class="col-12 col-sm-6 col-md-4 col-lg-3">
     <div class="outer-div">
       <div class="inner-div">
         <div class="front">
           <div class="front__bkg-photo"></div>
           <div
             class="front__face-photo"
             style="
               background: url(images/Batch2k23/ShivamDubey.jpeg)
                 no-repeat;
               background-size: contain;
               padding-top: 1%;
             "
           ></div>

           <div class="front__text">
             <h3 class="front__text-header">Shivam Dubey</h3>
             <p class="front__text-para">Chairman</p>
           </div>
         </div>
         <div class="back">
           <div class="social-media-wrapper">
             <a
               href="https://www.facebook.com/shivam dubey/"
               target="_blank"
               class="social-icon"
               ><i
                 class="fab fa-facebook-square"
                 aria-hidden="true"
               ></i
             ></a>
             <a
               href="https://www.linkedin.com/in/shivam-dubey-862086203/"
               target="_blank"
               class="social-icon"
               ><i class="fab fa-linkedin-in" aria-hidden="true"></i
             ></a>
             <a
               href="https://www.instagram.com/shivamdubey405/"
               target="_blank"
               class="social-icon"
               ><i class="fab fa-instagram" aria-hidden="true"></i
             ></a>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div class="col-12 col-sm-6 col-md-4 col-lg-3">
     <div class="outer-div">
       <div class="inner-div">
         <div class="front">
           <div class="front__bkg-photo"></div>
           <div
             class="front__face-photo"
             id="simran"
             style="
               background: url(images/Batch2k23/simran.jpg) no-repeat;
               background-size: contain;
               padding-top: 1%;
             "
           ></div>
           <div class="front__text">
             <h3 class="front__text-header">Simran Garg</h3>
             <p class="front__text-para">Vice Chairman</p>
           </div>
         </div>
         <div class="back">
           <div class="social-media-wrapper">
             <a
               href="https://www.facebook.com/SimranGarg0501"
               target="_blank"
               class="social-icon"
               ><i
                 class="fab fa-facebook-square"
                 aria-hidden="true"
               ></i
             ></a>
             <a
               href="https://www.linkedin.com/in/simran-garg-0501"
               target="_blank"
               class="social-icon"
               ><i class="fab fa-linkedin-in" aria-hidden="true"></i
             ></a>
             <a
               href="https://www.instagram.com/simran_garg0501/"
               target="_blank"
               class="social-icon"
               ><i class="fab fa-instagram" aria-hidden="true"></i
             ></a>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div class="col-12 col-sm-6 col-md-4 col-lg-3">
     <div class="outer-div">
       <div class="inner-div">
         <div class="front">
           <div class="front__bkg-photo"></div>
           <div
             class="front__face-photo"
             style="
               background: url(images/Batch2k23/SonuGupta.jpg)
                 no-repeat;
               background-size: contain;
             "
           ></div>

           <div class="front__text">
             <h3 class="front__text-header">Sonu Gupta</h3>
             <p class="front__text-para">Treasurer</p>
           </div>
         </div>
         <div class="back">
           <div class="social-media-wrapper">
             <a
               href="https://www.facebook.com/104.sonugupta"
               target="_blank"
               class="social-icon"
               ><i
                 class="fab fa-facebook-square"
                 aria-hidden="true"
               ></i
             ></a>
             <a
               href="https://www.linkedin.com/in/104-sonu-gupta/"
               target="_blank"
               class="social-icon"
               ><i class="fab fa-linkedin-in" aria-hidden="true"></i
             ></a>
             <a
               href="https://www.instagram.com/sonu_gupta_104/"
               target="_blank"
               class="social-icon"
               ><i class="fab fa-instagram" aria-hidden="true"></i
             ></a>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="row h-100 justify-content-center align-items-center">
   <div class="col-12 col-sm-6 col-md-4 col-lg-3">
     <div class="outer-div">
       <div class="inner-div">
         <div class="front">
           <div class="front__bkg-photo"></div>
           <div
             class="front__face-photo"
             style="
               background: url(images/Batch2k23/YasserKhan.jpg)
                 no-repeat;
               background-size: contain;
               padding-top: 1%;
             "
           ></div>

           <div class="front__text">
             <h3 class="front__text-header">Yasser Osman Khan</h3>
             <p class="front__text-para">Programmer</p>
           </div>
         </div>
         <div class="back">
           <div class="social-media-wrapper">
             <a
               href="https://www.facebook.com/yasser.o.khan1234"
               target="_blank"
               class="social-icon"
               ><i
                 class="fab fa-facebook-square"
                 aria-hidden="true"
               ></i
             ></a>
             <a
               href="https://www.linkedin.com/in/yasserkhan45"
               target="_blank"
               class="social-icon"
               ><i class="fab fa-linkedin-in" aria-hidden="true"></i
             ></a>
             <a
               href="http://instagram.com/yasserkhan45"
               target="_blank"
               class="social-icon"
               ><i class="fab fa-instagram" aria-hidden="true"></i
             ></a>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div class="col-12 col-sm-6 col-md-4 col-lg-3">
     <div class="outer-div">
       <div class="inner-div">
         <div class="front">
           <div class="front__bkg-photo"></div>
           <div
             class="front__face-photo"
             style="
               background: url(images/Batch2k23/Deepeeka.jpg) no-repeat;
               background-size: contain;
               padding-top: 1%;
             "
           ></div>
           <div class="front__text">
             <h3 class="front__text-header">Deepeeka</h3>
             <p class="front__text-para">Web Master</p>
           </div>
         </div>
         <div class="back">
           <div class="social-media-wrapper">
             <a
               href="https://www.facebook.com/deepeeka.chudasama/"
               target="_blank"
               class="social-icon"
               ><i
                 class="fab fa-facebook-square"
                 aria-hidden="true"
               ></i
             ></a>
             <a
               href="https://www.linkedin.com/in/deepeekachudasama/"
               target="_blank"
               class="social-icon"
               ><i class="fab fa-linkedin-in" aria-hidden="true"></i
             ></a>
             <a
               href="https://www.instagram.com/chudasamadeepeeka/"
               target="_blank"
               class="social-icon"
               ><i class="fab fa-instagram" aria-hidden="true"></i
             ></a>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div class="col-12 col-sm-6 col-md-4 col-lg-3">
     <div class="outer-div">
       <div class="inner-div">
         <div class="front">
           <div class="front__bkg-photo"></div>
           <div
             class="front__face-photo"
             style="
               background: url(images/Batch2k23/Jayshree.jpg) no-repeat;
               background-size: contain;
               padding-top: 1%;
             "
           ></div>
           <div class="front__text">
             <h3 class="front__text-header">Jayshree Choudhary</h3>
             <p class="front__text-para">Public Relations In-charge</p>
           </div>
         </div>
         <div class="back">
           <div class="social-media-wrapper">
             <a
               href="https://www.facebook.com/jayshree.choudhary.1238/"
               target="_blank"
               class="social-icon"
               ><i
                 class="fab fa-facebook-square"
                 aria-hidden="true"
               ></i
             ></a>
             <a
               href="https://www.linkedin.com/in/038jayshree/"
               target="_blank"
               class="social-icon"
               ><i class="fab fa-linkedin-in" aria-hidden="true"></i
             ></a>
             <a
               href="https://www.instagram.com/jayshree_1375/"
               target="_blank"
               class="social-icon"
               ><i class="fab fa-instagram" aria-hidden="true"></i
             ></a>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div class="col-12 col-sm-6 col-md-4 col-lg-3">
     <div class="outer-div">
       <div class="inner-div">
         <div class="front">
           <div class="front__bkg-photo"></div>
           <div
             class="front__face-photo"
             style="
               background: url(images/Batch2k23/CharuBajaj.jpg)
                 no-repeat;
               background-size: contain;
               padding-top: 1%;
             "
           ></div>

           <div class="front__text">
             <h3 class="front__text-header">Charu Bajaj</h3>
             <p class="front__text-para">Editor</p>
           </div>
         </div>
         <div class="back">
           <div class="social-media-wrapper">
             <a
               href="https://www.linkedin.com/in/charu-bajaj-2888b4203/"
               target="_blank"
               class="social-icon"
               ><i class="fab fa-linkedin-in" aria-hidden="true"></i
             ></a>
                     </div>
                   </div>
                 </div>
               </div>
               </div> 
   </div>
 </div>`;
}

function func22(){
    b.innerHTML = "Batch 2022";
    document.getElementById("team").innerHTML =
    `<div id = "id22">
  <div class="row h-100 justify-content-center align-items-center">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="outer-div">
        <div class="inner-div">
          <div class="front">
            <div class="front__bkg-photo"></div>
            <div
              class="front__face-photo"
              style="
                background: url(images/Faculty-Advisor/Dr.USR.jpg) no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="front__text">
              <h3 class="front__text-header">Dr. U Srinivasulu Reddy</h3>
              <h4><p class="front__text-para">Staff Advisor</p></h4>
            </div>
          </div>
          <div class="back">
            <div class="social-media-wrapper">
              <a
                href="https://www.linkedin.com/in/srinivasulu-reddy-288666158/"
                target="_blank"
                target="_blank"
                class="social-icon"
                ><i class="fab fa-linkedin-in" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row h-100 justify-content-center align-items-center">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="outer-div">
        <div class="inner-div">
          <div class="front">
            <div class="front__bkg-photo"></div>
            <div
              class="front__face-photo"
              style="
                background: url(images/Batch2k22/Ravi_Jain.jpg) no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="front__text">
              <h3 class="front__text-header">Ravi Jain</h3>
              <p class="front__text-para">Chairman</p>
            </div>
          </div>
          <div class="back">
            <div class="social-media-wrapper">
              <a
                href="https://www.facebook.com/profile.php?id=100005197776608"
                target="_blank"
                class="social-icon"
                ><i class="fab fa-facebook-square" aria-hidden="true"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/ravi-jain-24239b134/"
                target="_blank"
                class="social-icon"
                ><i class="fab fa-linkedin-in" aria-hidden="true"></i
              ></a>
              <a
                href="https://www.instagram.com/ravi_m_i/"
                target="_blank"
                class="social-icon"
                ><i class="fab fa-instagram" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="outer-div">
        <div class="inner-div">
          <div class="front">
            <div class="front__bkg-photo"></div>
            <div
              class="front__face-photo"
              style="
                background: url(images/Batch2k22/Harsh_Kesharwani.jpg) no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="front__text">
              <h3 class="front__text-header">Harsh Kesharwani</h3>
              <p class="front__text-para">Treasurer</p>

              <!--<span class="front__text-hover">Hover to Find Me</span>-->
            </div>
          </div>
          <div class="back">
            <div class="social-media-wrapper">
              <a href="#" target="_blank" class="social-icon"
                ><i class="fab fa-facebook-square" aria-hidden="true"></i
              ></a>
              <a href="#" target="_blank" class="social-icon"
                ><i class="fab fa-linkedin-in" aria-hidden="true"></i
              ></a>
              <a href="#" target="_blank" class="social-icon"
                ><i class="fab fa-instagram" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="outer-div">
        <div class="inner-div">
          <div class="front">
            <div class="front__bkg-photo"></div>
            <div
              class="front__face-photo"
              style="
                background: url(images/Batch2k22/Akanksha_Phalwadiya.jpg)
                  no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="front__text">
              <h3 class="front__text-header">Akanksha Phalwadiya</h3>
              <p class="front__text-para">Programmer</p>
            </div>
          </div>
          <div class="back">
            <div class="social-media-wrapper">
              <a href="https://m.facebook.com/akanksha.phalwadiya" target="_blank" class="social-icon"
                ><i class="fab fa-facebook-square" aria-hidden="true"></i
              ></a>
              <a href="https://www.linkedin.com/in/akanksha-phalwadiya-1785811b0" target="_blank" class="social-icon"
                ><i class="fab fa-linkedin-in" aria-hidden="true"></i
              ></a>
              <a href="https://www.instagram.com/akanksha_phalwadiya/" target="_blank" class="social-icon"
                ><i class="fab fa-instagram" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="outer-div">
        <div class="inner-div">
          <div class="front">
            <div class="front__bkg-photo"></div>
            <div
              class="front__face-photo"
              style="
                background: url(images/Batch2k22/Rahul_Rai.jpg) no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="front__text">
              <h3 class="front__text-header">Rahul Rai</h3>
              <p class="front__text-para">Web Master</p>

              <!--<span class="front__text-hover">Hover to Find Me</span>-->
            </div>
          </div>
          <div class="back">
            <div class="social-media-wrapper">
              <a
                href="https://www.facebook.com/rahulgulabrai/"
                target="_blank"
                class="social-icon"
                ><i class="fab fa-facebook-square" aria-hidden="true"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/rahul-rai-493879192/"
                target="_blank"
                class="social-icon"
                ><i class="fab fa-linkedin-in" aria-hidden="true"></i
              ></a>
              <a
                href="https://www.instagram.com/rahul.rai.73/"
                target="_blank"
                class="social-icon"
                ><i class="fab fa-instagram" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="outer-div">
        <div class="inner-div">
          <div class="front">
            <div class="front__bkg-photo"></div>
            <div
              class="front__face-photo"
              style="
                background: url(images/Batch2k22/Ritu_Prajapati.jpg) no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="front__text">
              <h3 class="front__text-header">Ritu Prajapati</h3>
              <p class="front__text-para">Public Relations In-charge</p>

              <!--<span class="front__text-hover">Hover to Find Me</span>-->
            </div>
          </div>
          <div class="back">
            <div class="social-media-wrapper">
              <a
                href="https://www.facebook.com/profile.php?id=100040663269587"
                target="_blank"
                class="social-icon"
                ><i class="fab fa-facebook-square" aria-hidden="true"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/ritu-prajapati-7b110b17b/"
                target="_blank"
                class="social-icon"
                ><i class="fab fa-linkedin-in" aria-hidden="true"></i
              ></a>
              <a
                href="https://www.instagram.com/rituprajapati399/"
                target="_blank"
                class="social-icon"
                ><i class="fab fa-instagram" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="outer-div">
        <div class="inner-div">
          <div class="front">
            <div class="front__bkg-photo"></div>
            <div
              class="front__face-photo"
              style="
                background: url(images/Batch2k22/Nitil_Singh.jpg) no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="front__text">
              <h3 class="front__text-header">Nitil Singh</h3>
              <p class="front__text-para">Education In-charge</p>
              <!--<span class="front__text-hover">Hover to Find Me</span>-->
            </div>
          </div>
          <div class="back">
            <div class="social-media-wrapper">
              <a
                href="https://www.facebook.com/nitil.singh.583/"
                target="_blank"
                class="social-icon"
                ><i class="fab fa-facebook-square" aria-hidden="true"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/nitil-singh-43ba561a4/"
                target="_blank"
                class="social-icon"
                ><i class="fab fa-linkedin-in" aria-hidden="true"></i
              ></a>
              <a
                href="https://www.instagram.com/_nitil/"
                target="_blank"
                class="social-icon"
                ><i class="fab fa-instagram" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="outer-div">
        <div class="inner-div">
          <div class="front">
            <div class="front__bkg-photo"></div>
            <div
              class="front__face-photo"
              style="
                background: url(images/Batch2k22/Darshni_Gupta.jpg) no-repeat;
                background-size: contain;
              "
            ></div>
            <div class="front__text">
              <h3 class="front__text-header">Darshni Gupta</h3>
              <p class="front__text-para">Resource In-charge</p>

              <!--<span class="front__text-hover">Hover to Find Me</span>-->
            </div>
          </div>
          <div class="back">
            <div class="social-media-wrapper">
              <a href="https://www.facebook.com/darshni.gupta.1/" target="_blank" class="social-icon"
                ><i class="fab fa-facebook-square" aria-hidden="true"></i
              ></a>
              <a href="https://www.linkedin.com/in/darshni-gupta-0867991b6/" target="_blank" class="social-icon"
                ><i class="fab fa-linkedin-in" aria-hidden="true"></i
              ></a>
              <a href="https://www.instagram.com/darshg19/" target="_blank" class="social-icon"
                ><i class="fab fa-instagram" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
     </div> `
}


// function func21(){
//     b.innerHTML = "Batch 2021";
//     document.getElementById("team").innerHTML =
//      `<div id = "id21">
//      <div class="row h-100 justify-content-center align-items-center">
//           <div class="col-12 col-sm-6 col-md-4 col-lg-3">
//           <div class="outer-div">
//             <div class="inner-div">
//               <div class="front">
//                 <div class="front__bkg-photo"></div>
//                 <div class="front__face-photo" style="background: url(images/Faculty-Advisor/Dr.USR.jpg) no-repeat; background-size: contain;">
//                 </div>
//                 <div class="front__text">
//                   <h3 class="front__text-header">Dr. U Srinivasulu Reddy</h3>
//                   <h4><p class="front__text-para">Staff Advisor</p></h4>
//                </div>
//               </div>
//               <div class="back">
//                 <div class="social-media-wrapper">
//                    <a href="https://www.linkedin.com/in/srinivasulu-reddy-288666158/" target= "_blank" class="social-icon"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
//                     </div>
//               </div>
//             </div>
//           </div>
//           </div>
//         </div>
//      <div class="row h-100 justify-content-center align-items-center">
//      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
//          <div class="outer-div">
//            <div class="inner-div">
//              <div class="front">
//                <div class="front__bkg-photo"></div>
//                <div class="front__face-photo" style="background: url(images/Batch2k21/YashKumarSinghal.jpg) no-repeat; background-size: contain;"></div>
//                <div class="front__text">
//                  <h3 class="front__text-header">Yash Kumar Singhal</h3>
//                  <p class="front__text-para">Chairman</p>
//                </div>
//              </div>
//              <div class="back">
//                <div class="social-media-wrapper">
//                  <a href="https://www.linkedin.com/in/yash-singhal-9730a91a9" target= "_blank" class="social-icon"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
//                 <a href="https://www.instagram.com/yash.cls" target= "_blank" class="social-icon"><i class="fab fa-instagram" aria-hidden="true"></i></a>
//                </div>
//              </div>
//            </div>
//          </div>
//          </div>  
//          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
//          <div class="outer-div">
//              <div class="inner-div">
//                <div class="front">
//                  <div class="front__bkg-photo"></div>
//                  <div class="front__face-photo" style="background: url(images/Batch2k21/Rajrishi_Vishwakarma.jpg) no-repeat; background-size: contain;"></div>
//                  <div class="front__text">
//                    <h3 class="front__text-header">Rajrishi Vishwakarma</h3>
//                    <p class="front__text-para">Treasurer</p>
//                  </div>
//                </div>
//                <div class="back">
//                  <div class="social-media-wrapper">
//                    <a href="https://www.linkedin.com/in/rajrishi-vishwakarma-42294613a/" target= "_blank" class="social-icon"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
//                  </div>
//                </div>
//              </div>
//          </div>
//          </div>
     
         
//              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
//              <div class="outer-div">
//                <div class="inner-div">
//                  <div class="front">
//                    <div class="front__bkg-photo"></div>
//                    <div class="front__face-photo" style="background: url(images/Batch2k21/amit.jpg) no-repeat; background-size: contain;" ></div>
//                    <div class="front__text">
//                      <h3 class="front__text-header">Amit Sahu</h3>
//                      <p class="front__text-para">Web Master</p>
//                    </div>
//                  </div>
//                  <div class="back">
//                    <div class="social-media-wrapper">
//                      <a href="https://www.facebook.com/amit.sahu.566148" target= "_blank" class="social-icon"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
//                      <a href="https://www.linkedin.com/in/amit-sahu-73329b147/" target= "_blank" class="social-icon"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
//                       <a href="https://www.instagram.com/amit_9216" target= "_blank" class="social-icon"><i class="fab fa-instagram" aria-hidden="true"></i></a>
//                    </div>
//                  </div>
//                </div>
//              </div>
//              </div>
//      </div>
   
//     <div class="row">
//     <div class="col-12 col-sm-6 col-md-4 col-lg-3">
//             <div class="outer-div">
//               <div class="inner-div">
//                 <div class="front">
//                   <div class="front__bkg-photo"></div>
//                   <div class="front__face-photo" style="background: url(images/Batch2k21/Ravina.jpg) no-repeat; background-size: contain;"></div>
//                   <div class="front__text">
//                     <h3 class="front__text-header">Ravina Verma</h3>
//                     <p class="front__text-para">Programmer</p>
//                    </div>
//                 </div>
//                 <div class="back">
//                   <div class="social-media-wrapper">
//                     <a href="https://www.facebook.com/profile.php?id=100008625315580" target= "_blank"class="social-icon"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
//                     <a href="https://www.linkedin.com/in/ravina-verma-61b366170/" target= "_blank" class="social-icon"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
//                      <a href="https://www.instagram.com/ravina5123/" target= "_blank" class="social-icon"><i class="fab fa-instagram" aria-hidden="true"></i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             </div>       
//     <div class="col-12 col-sm-6 col-md-4 col-lg-3">
//              <div class="outer-div">
//                <div class="inner-div">
//                  <div class="front">
//                    <div class="front__bkg-photo"></div>
//                    <div class="front__face-photo" style="background: url(images/Batch2k21/Yugansh.jpg) no-repeat; background-size: contain;"></div>
//                    <div class="front__text">
//                      <h3 class="front__text-header">Yugansh Arora</h3>
//                      <p class="front__text-para">Education In-charge</p>
//                    </div>
//                  </div>
//                  <div class="back">
//                    <div class="social-media-wrapper">
//                      <a href="https://www.linkedin.com/in/yugansh-arora-37082a1a9/" target= "_blank" class="social-icon"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
//                       <a href="https://www.instagram.com/yug_arora" target= "_blank" class="social-icon"><i class="fab fa-instagram" aria-hidden="true"></i></a>
//                    </div>
//                  </div>
//                </div>
//              </div>
//              </div>
//     <div class="col-12 col-sm-6 col-md-4 col-lg-3">
//         <div class="outer-div">
//           <div class="inner-div">
//             <div class="front">
//               <div class="front__bkg-photo"></div>
//               <div class="front__face-photo" style="background: url(images/Batch2k21/nikki_singh.jpg) no-repeat; background-size: contain;"></div>
//               <div class="front__text">
//                 <h3 class="front__text-header">Nikki Singh</h3>
//                 <p class="front__text-para">Public Relations In-charge</p>
//               </div>
//             </div>
//             <div class="back">
//               <div class="social-media-wrapper">
//                 <a href="https://www.facebook.com/profile.php?id=100026998684369" target= "_blank" class="social-icon"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
//                 <a href="https://www.linkedin.com/in/nikkisingh123/"target= "_blank"class="social-icon"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
//                </div>
//             </div>
//           </div>
//         </div>
//         </div>  
//     <div class="col-12 col-sm-6 col-md-4 col-lg-3">
//             <div class="outer-div">
//               <div class="inner-div">
//                 <div class="front">
//                   <div class="front__bkg-photo"></div>
//                   <div class="front__face-photo" style="background: url(images/Batch2k21/Preeti_Jatav.jpg) no-repeat; background-size: contain;"></div>
//                   <div class="front__text">
//                     <h3 class="front__text-header">Preeti Jatav</h3>
//                     <p class="front__text-para">Resource In-charge</p>
//                    </div>
//                 </div>
//                 <div class="back">
//                   <div class="social-media-wrapper">
//                     <a href="https://www.facebook.com/preeti.jatav.50364" target= "_blank" class="social-icon"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
//                     <a href="https://www.linkedin.com/in/preeti-jatav-316100170/" target= "_blank" class="social-icon"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
//                      <a href="https://www.instagram.com/preeti.jatav.50364" target= "_blank" class="social-icon"><i class="fab fa-instagram" aria-hidden="true"></i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             </div>
            
    
//     </div>
//     </div>`;
// }
