<template>
        <article id = "webslides" class = "horizontal">

                <div>
                  <div class = "grid ms">
                    <div class = "column border "><h3>Welcome to Titan Importers</h3>
                      <img id = "welcomeImg" src = "../assets/homelegance-logo.jpg" alt = 'image'>
                    </div>
                      <div class = "column border">
                        <h3>Stars of Week</h3>
                        <img src="" alt="Bryan Kwok">
                        <h5>CongratulAtions Bryan</h5>
                      </div>
                  </div>
                </div>
            <!-- Slide 1 -->
              <div>
                  <div class = "grid ms">
                    <div class = "column border "><h3>News</h3>
                      <div >
                        <ul class = "ul flexblock activity border">
                              <li>Anniversary,Birthdays, Achievements
                                <small></small>
                              </li>
                              <li> </li>
                              <li></li>
                          </ul>
                      </div>
                    </div>
                      <div class = "column border">
                        <h3>Reminders</h3>
                      </div>
                  </div>
                </div>

        </article>

</template>

<script>
import webslidesJs from '../webslides/static/js/webslides.js'
import webslidesCss from '../webslides/static/css/webslides.css'

export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #welcomeImg{
   width:240px;
   height:auto ;
   margin: 0 auto;
 }
</style>
