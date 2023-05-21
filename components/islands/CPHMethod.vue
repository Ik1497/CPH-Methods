<script setup>
const {method} = defineProps([`method`])
</script>

<template>
  <Head>
    <Link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css" />
  </Head>

  <div
    :style="{
      color: `#fff`,
      background: `#181818`,
      width: `100%`,
      height: `100%`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      alignItems: `center`,
    }">
    <div
      :style="{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        gap: `20px`,
      }">
      <div>
        <Icon :name="method.icon" />
      </div>
      <div>
        <v-icon>{{ method.icon }}</v-icon>
        <p
          :style="{
            fontSize: `48px`,
            fontWeight: `700`,
            height: `28px`,
          }">
          {{ method.title }}
        </p>
        <p
          :style="{
            fontSize: `32px`,
            fontWeight: `400`,
          }">
          {{ method.description }}
        </p>
      </div>
    </div>

    <div
      :style="{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        gap: `10px`,
        position: `absolute`,
        bottom: `0`,
        left: `0`,
        right: `0`,
      }">
      <img
        src="https://streamer.bot/logo.png"
        alt="Streamer.bot Logo"
        :style="{
          width: `20px`,
        }" />

      <p
        :style="{
          fontSize: `20px`,
        }">
        Streamer.bot C# CPH Methods
      </p>
    </div>
  </div>
</template>
