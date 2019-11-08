import React from "react"
import { Photo } from "../components/photo"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <p>i am a gallery</p>
    <Photo source='https://p-yajnik.s3.eu-west-2.amazonaws.com/photo-1.jpg' />
    <Photo source='https://p-yajnik.s3.eu-west-2.amazonaws.com/photo-3.jpg' />
    <Photo source='https://p-yajnik.s3.eu-west-2.amazonaws.com/photo-4.jpg' />
  </Layout>
)
