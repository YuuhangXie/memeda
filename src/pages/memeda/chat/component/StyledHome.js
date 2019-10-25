import styled from 'styled-components'

const HomeContainer = styled.div`
        width: 100%;
        height: 100%;
        .hidden {
            display: none;
        }
        .settings-container {
            position: absolute;
            top: 0.44rem;
            height: 100%;
            width: 100%;
            background-color: rgba(112, 112, 112, 0.2);
            .settings {
                background:#fff;
                width: 100%;
                height: .88rem;
                display: flex;

                .history {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content:center;
                    align-items:center;
                    color: #B9B9B9;
                    img {
                        width: .4rem;
                        height: .4rem;
                    }
               } 
               .background {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content:center;
                    align-items:center;
                    color: #B9B9B9;
                    img {
                        width: .4rem;
                        height: .3rem;
                        margin: .05rem 0;
                    }
               } 
            }
        }
        .chat-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            .header-container {
                display: flex;
                align-items: center;
                line-height: 1;
                width: 100%;
                height: 0.44rem;
                background-color: #F09199;
                color: #ffffff;
                font-size: 0.17rem;
                .back {
                    width: 0.2rem;
                    height: 0.2rem;
                    margin-left: 0.11rem;
                    img {
                        height: 100%;
                        width: 100%;
                    }
                }
                .title {
                    margin-left: 1.32rem;
                }
                .setting {
                    width: 0.2rem;
                    height: 0.2rem;
                    margin-left: 1.36rem;
                    img {
                        height: .05rem;
                        width: .2rem;
                    }
                }
            }
            .chat-body {
                flex: 1;
                background: #f3f3f3;
                background-size: 100% 100%;
                display: flex;
                flex-direction: column;
                .chatting {
                    flex: 1;
                    .he {
                        width: 100%;
                        height: .8rem;
                        padding: .15rem;
                        .avater {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            img {
                                width: .58rem;
                                height: .58rem;
                                margin-right: .15rem;
                            }
                            .hesay {
                                width: 1.6rem;
                                height: .4rem;
                                background: #fff;
                                text-align: center;
                                line-height: .4rem;
                            }
                        }
                        
                        
                    }
                    .she {
                        width: 100%;
                        height: .8rem;
                        padding: .15rem;
                        .avater {
                            display: flex;
                            flex-direction: row-reverse;
                            justify-content: flex-start;
                            align-items: center;
                            img {
                                width: .58rem;
                                height: .58rem;
                                margin-left: .15rem;
                            }
                            .shesay {
                                width: 1.6rem;
                                height: .4rem;
                                background: #fff;
                                text-align: center;
                                line-height: .4rem;
                            }
                        }
                    }
                }
                .inputting {
                    width: 100%;
                    height: .5rem;
                    background: #fff;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .voice {
                        width: .25rem;
                        height: .25rem;
                    }
                    .inputs {
                        width: 2.5rem;
                        height: .3rem;
                        input {
                            width: 100%;
                            height: 100%;
                            border: 1px #B9B9B9 solid;
                        }
                    }

                    .send {
                        width: .5rem;
                        height: .3rem;
                        button {
                            width: 100%;
                            height: 100%;
                            border: none;
                            background: #F09199;
                        }
                    }
                }
            }
        } 
`

export {
  HomeContainer
}