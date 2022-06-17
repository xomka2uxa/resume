<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__inner">
        <div class="footer-left">
          <span class="spanborder">© 2022 Pix4Art. Все права защищены</span>
          <a href="#" class="gradientbtn">Начать</a>
        </div>
        <div class="footer-right">
          <a href="#" class="spanborder">Политика конфиденциальности</a>
          <a href="#">Условия сотрудничества</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterApp',
};
</script>

<style lang="scss" scoped>
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 30px 0;
    width: 100%;
    background-color: #000;

    &__container {
      margin: 0 auto;
      width: 100%;
      max-width: 1200px;
      padding: 0 10px;
    }

    &__inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #BDBDBD;
      font-family: Roboto, Arial, sans-serif;
      font-size: 16px;
      font-weight: 400;

      @media (min-width: 425px) {
        align-items: center;
      }

       @media (min-width: 800px) {
        flex-direction: row;
       }

      & a {
        color: #BDBDBD;
        font-family: Roboto, Arial, sans-serif;
        font-size: 16px;
        font-weight: 400;
        padding: 8px 0;

        &:hover {
          color: #fff;
        }
      }

      & span {
        padding: 8px 0;
      }
      .footer-left,
      .footer-right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

         @media (min-width: 425px) {
           flex-direction: row;
           justify-content: space-between;
         }

        .spanborder {
          padding-right: 5px;
          margin-right: 5px;

          @media (min-width: 800px) {
            border-right: solid 1px #BDBDBD;
          }
        }

        .gradientbtn {
          font-weight: 600;
          background-image: linear-gradient(to left, #0900C8 0%, #BD00C6 100%);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          display: none;

          @media (min-width: 425px) {
            display: block;
          }

          &:hover {
            background-image: linear-gradient(to right, #0900C8 0%, #BD00C6 100%);
          }
        }
      }

      .footer-left {
        flex-direction: column-reverse;
        align-items: flex-start;

        @media (min-width: 425px) {
           flex-direction: row;
           justify-content: space-between;
         }
      }
    }
  }
</style>
