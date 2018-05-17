<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <Icon type="android-close"></Icon>
                        <span>网上讲习所</span>
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '80px 20px 0', background: '#fff', minHeight: '500px'}">
                <div class="header-box">
                    <Row :gutter="16">
                        <Col span="6">
                            <div class="item" >
                                <div class="img-box">img</div>
                                <div class="img-des">身边人身边事</div>
                            </div>
                        </Col>
                        <Col span="6">
                            <div class="item">
                                <div class="img-box">img</div>
                                <div class="img-des">两学一做</div>
                            </div>
                        </Col>
                        <Col span="6">
                            <div class="item">
                                <div class="img-box">img</div>
                                <div class="img-des">巡视利剑</div>
                            </div>
                        </Col>
                        <Col span="6">
                            <div class="item">
                                <div class="img-box">img</div>
                                <div class="img-des">移动党课</div>
                            </div>
                        </Col>
                    </Row>
                    <Row :gutter="16">
                        <Col span="6">
                            <div class="item" >
                                <div class="img-box">img</div>
                                <div class="img-des">知识竞赛</div>
                            </div>
                        </Col>
                        <Col span="6">
                            <div class="item">
                                <div class="img-box">img</div>
                                <div class="img-des">党建百宝箱</div>
                            </div>
                        </Col>
                        <Col span="6">
                            <div class="item">
                                <div class="img-box">img</div>
                                <div class="img-des">党员活动</div>
                            </div>
                        </Col>
                        <Col span="6">
                            <div class="item">
                                <div class="img-box">img</div>
                                <div class="img-des">微心愿</div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div class="content-box">
                    <Row
                        type="flex"
                        justify="center"
                        align="middle"
                        class="code-row-bg">
                        <!-- <Col span="8"><p>img</p></Col> -->
                        <Col
                            span="16"
                            v-for="(item, index) in list"
                            :key="index">
                            <p @click="gotoDetail(item.id)">{{ item.title}}</p>
                            <span>{{ item.date}}</span>
                        </Col>
                    </Row>

                </div>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>

<style lang="sass" scoped>
@import './index.scss'
</style>

<script src="./index.js">
</script>
