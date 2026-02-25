import React from 'react'
import { Row, Col, Card, Image } from 'antd'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import star from "../assets/star copy.png"
import content from "../assets/content.png"
import graph from "../assets/graph.png"
import circleIcon from "../assets/circleIcon.png"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import nextIcon from "../assets/nextIcon.png"
import logo192 from "../assets/logo192.png"

function Home() {
  const navigate = useNavigate();

  const stats = [
    {
      value: "9+",
      label: "Years",
      title: "Experience",
      description: "Driving innovation in the tech industry.",
    },
    {
      value: "10+",
      label: "Industries",
      title: "Served",
      description: "Empowering diverse sectors with technology.",
    },
    {
      value: "100%",
      label: "Client",
      title: "Satisfaction",
      description: "Delivering excellence in every project.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const viewFade = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* HERO */}
      <div className='home-container'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}
        >
          <Image src={logo192} preview={false} width={80} style={{ borderRadius: '50%' }} />
        </motion.div>
        <motion.div {...fadeInUp}>
          <div className='home-title'>
            <span>Gateway to <span className='span-limitless'>limitless</span></span>
            <br />
            <span>Digital Twin Possibilitie<span className="highlight">s</span></span>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className='home-sub-title'>
            <span>Transform how you manage, simulate, and optimize your digital world.</span>
            <br />
            <span>Leverage advanced technology to unlock endless opportunities and step into the future today.</span>
          </div>
        </motion.div>

        <motion.div
          style={{ marginTop: 40, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className='get-started-button' onClick={() => navigate("/contact")}>Get Started</button>
        </motion.div>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div
              className="stat-item"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-value">
                {stat.value} <span className="stat-label">{stat.label}</span>
              </div>
              <div className="stat-title">{stat.title}</div>
              <div className="stat-description">{stat.description}</div>
              {index < stats.length - 1 && <div className="divider" />}
            </motion.div>
          ))}
        </div>
      </div>

      {/* OUR PLATFORM heading */}
      <motion.div {...viewFade}>
        <Row style={{ padding: "5% 10% 0% 10%" }}>
          <Col xl={17} lg={17} md={17} sm={24} xs={24}>
            <div className='label-platform'>OUR PLATFORM</div>
            <div className='home-title-2'>
              TwinV is the All-in-One Platform
              for IoT and Digital Twins
            </div>
            <div className='home-title-3'>
              TwinV combines IoT and digital twin technology to deliver real-time insights,
              predictive analytics, and advanced simulations. Optimize performance,
              streamline operations, and drive innovation with our all-in-one platform.
            </div>
          </Col>
          <Col xl={7} lg={7} md={7} sm={24} xs={24} style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
            <button className='button-step'>Step Into the Future</button>
          </Col>
        </Row>
      </motion.div>

      {/* PLATFORM CARDS ROW 1 */}
      <motion.div {...viewFade} transition={{ duration: 0.6, delay: 0.1 }}>
        <Row style={{ padding: "3% 10% 0% 10%" }}>
          <Col xl={17} lg={17} md={17} sm={24} xs={24}>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Card className="feature-card" style={{ width: "98%", height: "100%" }}>
                <div className='home-title-2'>Flexible Protocol Integration</div>
                <div className='home-title-3'>
                  TwinV supports seamless integration with any communication protocol, ensuring
                  compatibility with diverse IoT devices and enabling future-ready scalability.
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5px" }}>
                  <Image width={300} src={content} preview={false} />
                </div>
              </Card>
            </motion.div>
          </Col>
          <Col xl={7} lg={7} md={7} sm={24} xs={24} style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} style={{ width: "98%", height: "100%" }}>
              <Card className="feature-card feature-card-purple" style={{ height: "100%", width: "100%" }}>
                <div className='ai-title'>AI-Powered<br />Predictions</div>
                <div className='ai-content'>
                  Leverage advanced AI and machine learning to predict potential issues,
                  optimize resources, and drive intelligent decision-making.
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginTop: 50 }}>
                  <Image width={120} src={star} preview={false} />
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>

      {/* PLATFORM CARDS ROW 2 */}
      <motion.div {...viewFade} transition={{ duration: 0.6, delay: 0.1 }}>
        <Row style={{ padding: "1.5% 10% 0% 10%" }}>
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Card className="feature-card" style={{ width: "98%", height: "100%" }}>
                <div style={{ inlineSize: "fit-content" }} className='home-title-2'>Real-Time Insights</div>
                <div style={{ width: "65%" }} className='home-title-3'>
                  Gain real-time visibility into asset performance to enable proactive maintenance and boost efficiency.
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginTop: 5 }}>
                  <Image width={230} src={graph} preview={false} />
                </div>
              </Card>
            </motion.div>
          </Col>
          <Col xl={12} lg={12} md={12} sm={24} xs={24} style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} style={{ width: "98%", height: "100%" }}>
              <Card className="feature-card feature-card-purple" style={{ height: "100%", width: "100%" }}>
                <div style={{ width: "80%", margin: "10px 0px" }} className='ai-title'>Sustainable Energy<br />Optimization</div>
                <div style={{ width: "50%" }} className='ai-content'>
                  Optimize energy consumption and enhance sustainability with TwinV's advanced insights.
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                  <Image width={180} src={circleIcon} preview={false} />
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>

      {/* TAILORED SMART SOLUTIONS heading */}
      <motion.div {...viewFade}>
        <Row style={{ padding: "5% 10% 0% 10%" }}>
          <Col xl={17} lg={17} md={17} sm={24} xs={24}>
            <div className='label-platform-1'>Tailored Smart Solutions</div>
            <div className='home-title-2'>
              Comprehensive IoT Solutions for Every Stage of Development
            </div>
            <div className='home-title-3'>
              We specialize in delivering end-to-end IoT solutions, combining hardware and software expertise.
              Whether you're building a product from scratch, modernizing existing systems, or enhancing
              functionality, we provide the innovation and support your business needs to thrive.
            </div>
          </Col>
          <Col xl={7} lg={7} md={7} sm={24} xs={24} style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
            <button className='button-step'>Transform with Us</button>
          </Col>
        </Row>
      </motion.div>

      {/* SERVICE CARDS */}
      <motion.div {...viewFade} transition={{ duration: 0.6, delay: 0.1 }}>
        <Row style={{ padding: "3% 10% 0% 10%" }}>
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Card className='card-back-1'>
                <div>
                  <div className='card-title-1'>Custom software<br />development</div>
                  <div className='card-content-1'>
                    Tailored solutions with domain expertise, technical excellence,
                    and full compliance for optimal results.
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <Image width={150} src={icon1} preview={false} />
                  <Image style={{ cursor: "pointer" }} onClick={() => navigate("/services")} src={nextIcon} preview={false} />
                </div>
              </Card>
            </motion.div>
          </Col>
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Card className='card-back-2'>
                <div>
                  <div className='card-title-1'>IT consulting and<br />digital advisory</div>
                  <div className='card-content-2'>
                    We assess, design, and optimize solutions with strategic precision,
                    from concept to delivery.
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <Image width={150} src={icon2} preview={false} />
                  <Image style={{ cursor: "pointer" }} onClick={() => navigate("/services")} src={nextIcon} preview={false} />
                </div>
              </Card>
            </motion.div>
          </Col>
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Card className='card-back-3'>
                <div>
                  <div className='card-title-1'>Digital transformation</div>
                  <div className='card-content-3'>
                    We enhance functionality, modernize systems, improve security,
                    automate processes, and reduce IT costs.
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <Image width={150} src={icon3} preview={false} />
                  <Image style={{ cursor: "pointer" }} onClick={() => navigate("/services")} src={nextIcon} preview={false} />
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>

      {/* INDUSTRIES heading */}
      <motion.div {...viewFade}>
        <Row style={{ padding: "5% 10% 0% 10%" }}>
          <Col xl={17} lg={17} md={17} sm={24} xs={24}>
            <div className='label-platform'>Industries in focus</div>
            <div className='home-title-2'>Accelerate Growth with End-to-End IoT Expertise</div>
            <div className='home-title-3'>
              Transform your business faster with our unparalleled IoT expertise. Leveraging deep
              domain knowledge, specialized hardware-software integration, and tailored delivery
              processes, we empower you to innovate, optimize operations, and achieve sustainable growth.
            </div>
          </Col>
          <Col xl={7} lg={7} md={7} sm={24} xs={24} style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
            <button className='button-step'>Unlock Innovation</button>
          </Col>
        </Row>
      </motion.div>

      {/* INDUSTRY TILES */}
      <motion.div {...viewFade} transition={{ duration: 0.6, delay: 0.1 }}>
        <div className='fintech-column'>
          <div className="fintech-row">
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
              <Card className="card-tile-1">
                <Row justify="space-between">
                  <Col span={24}>
                    <div className="tile-heading">FinTech</div>
                    <div className="tile-content">Custom financial software for digital payments, banking.</div>
                  </Col>
                  <Col span={24} className="tile-icon">
                    <Image style={{ cursor: "pointer" }} onClick={() => navigate("/industries")} src={nextIcon} preview={false} />
                  </Col>
                </Row>
              </Card>
            </motion.div>
          </div>

          <div className='fintech-row'>
            <Row>
              <Col xl={8} md={8} lg={8} sm={24} xs={24}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className='fintech-row-2'>
                    <Row>
                      <Col>
                        <div className='tile-heading'>Real Estate</div>
                        <div className='tile-content'>Develop modern real estate solutions using cutting-edge technologies.</div>
                      </Col>
                      <Col className='tile-icon' xl={24} sm={24} xs={24} lg={24} md={24}>
                        <Image style={{ cursor: "pointer" }} onClick={() => navigate("/industries")} src={nextIcon} preview={false} />
                      </Col>
                    </Row>
                  </Card>
                </motion.div>
              </Col>
              <Col xl={16} md={16} lg={16} sm={24} xs={24}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className='fintech-row-1'>
                    <Row>
                      <Col>
                        <div className='tile-heading'>Healthcare</div>
                        <div style={{ margin: "0px 0px 17% 0px" }} className='tile-content'>Custom EHR, EMR, ERX, and other medical solutions.</div>
                      </Col>
                      <Col className='tile-icon' xl={24} sm={24} xs={24} lg={24} md={24}>
                        <Image style={{ cursor: "pointer" }} onClick={() => navigate("/industries")} src={nextIcon} preview={false} />
                      </Col>
                    </Row>
                  </Card>
                </motion.div>
              </Col>

              <Col xl={16} md={16} lg={16} sm={24} xs={24}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className='fintech-row-2' style={{ marginTop: 5 }}>
                    <Row>
                      <Col>
                        <div className='tile-heading'>Transportation and mobility</div>
                        <div style={{ margin: "0px 0px 11% 0px" }} className='tile-content'>
                          Custom TMS, WMS, FMS, vehicle management, and blockchain systems for transportation.
                        </div>
                      </Col>
                      <Col className='tile-icon' xl={24} sm={24} xs={24} lg={24} md={24}>
                        <Image style={{ cursor: "pointer" }} onClick={() => navigate("/industries")} src={nextIcon} preview={false} />
                      </Col>
                    </Row>
                  </Card>
                </motion.div>
              </Col>

              <Col xl={8} md={8} lg={8} sm={24} xs={24}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <Card className='fintech-row-1' style={{ backgroundColor: "black", color: "white", marginTop: 5 }}>
                    <Row>
                      <Col>
                        <div className='tile-heading'>Software</div>
                        <div style={{ margin: "0px 0px 15% 0px" }} className='tile-content'>
                          Build software of any complexity, from SaaS systems to product ecosystems.
                        </div>
                      </Col>
                      <Col className='tile-icon' xl={24} sm={24} xs={24} lg={24} md={24}>
                        <Image style={{ cursor: "pointer" }} onClick={() => navigate("/industries")} src={nextIcon} preview={false} />
                      </Col>
                    </Row>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </div>
        </div>
      </motion.div>

      {/* Manufacturing + Smart Home */}
      <motion.div {...viewFade} transition={{ duration: 0.6, delay: 0.1 }}>
        <Row style={{ padding: "0% 10% 0% 10%" }}>
          <Col xl={12} md={12} lg={12} sm={24} xs={24}>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
              <Card className='fintech-row-2' style={{ marginTop: 5 }}>
                <Row>
                  <Col>
                    <div className='tile-heading'>Manufacturing</div>
                    <div style={{ margin: "0px 0px 8% 0px" }} className='tile-content'>
                      Optimize production with custom manufacturing software solutions.
                    </div>
                  </Col>
                  <Col style={{ display: "flex", justifyContent: "flex-end" }} xl={24} sm={24} xs={24} lg={24} md={24}>
                    <Image style={{ cursor: "pointer" }} onClick={() => navigate("/industries")} src={nextIcon} preview={false} />
                  </Col>
                </Row>
              </Card>
            </motion.div>
          </Col>

          <Col xl={12} md={12} lg={12} sm={24} xs={24}>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
              <Card className='fintech-row-1 card-tile-2' style={{ marginTop: 5 }}>
                <Row>
                  <Col>
                    <div className='tile-heading'>Smart Home and<br />Appliances</div>
                    <div className='tile-content'>Increase the value of smart home products with user-centered software.</div>
                  </Col>
                  <Col style={{ display: "flex", justifyContent: "flex-end" }} xl={24} sm={24} xs={24} lg={24} md={24}>
                    <Image style={{ cursor: "pointer" }} onClick={() => navigate("/industries")} src={nextIcon} preview={false} />
                  </Col>
                </Row>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </>
  )
}

export default Home
