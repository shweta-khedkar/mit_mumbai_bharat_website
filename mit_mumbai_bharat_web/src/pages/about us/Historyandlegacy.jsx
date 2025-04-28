import React from 'react';
import './historyandlegacy.css';
import vision from '../../assets/Visionaries_of_Education.webp'
import inaugral from '../../assets/Inaugural_MIT-WPU.webp'
import global from '../../assets/Global_Recognition_and_Cultural_Milestones.webp'
import expanding from '../../assets/Expanding_Horizons_dome.webp'
import kaman from '../../assets/kaman.webp'
import bcs from '../../assets/BCS.webp'

const Historyandlegacy = () => {
    return (
        <>

            <div className="history-legacy-container">
                <div className="history-legacy-header">
                    <h1>History & Legacy</h1>
                </div>

                <div className="history-legacy-content">
                    <p>
                        Established in 1983 by Dr. Vishwanath D. Karad, MIT Group of Institutions has been a pioneer in the field of education, research, and innovation. With a legacy of over four decades, the group has contributed immensely to nation-building by nurturing young minds and empowering them with the knowledge, skills, and values needed for a better tomorrow.
                    </p>

                    <div className="history-legacy-section">
                        <h2>Visionaries of Education: The Birth of MIT-WPU</h2>
                        <p>
                            Between 1981 and 1983, MIT was conceived as an inspiration, a visionary institution that stood decades ahead of its time. It was born from the creative zeal to redefine education, embracing innovation and excellence. During this pivotal period, the seeds of a remarkable educational journey were sown, laying the foundation for an institution that would continuously inspire and shape the future of education, pushing the boundaries of what was thought possible in academia.
                           </p> <img
                                src={vision}
                                alt="MIT-WPU History"
                                className="history-legacy-image"
                            />
                            
                    </div>

                    <div className="history-legacy-section">
                        <h2>Founding Excellence: The Inaugural Years of MIT (Now MIT-WPU)</h2>
                        <p>
                            MIT (now MIT-WPU) embarked on its illustrious journey with unwavering determination in 1983. At its inception, a dedicated team of professors passionate about education laid the foundation upon which this institution would thrive. The auspicious Bhoomi Pujan, a ground-breaking ceremony, marked the inception of a remarkable voyage. MAEERs welcomed its first batch of Electronics and Telecommunication students, setting the stage for academic excellence. Additionally, establishing a foundation stone for a workshop reinforced the commitment to hands-on learning, ensuring a holistic educational experience for all who walked through its doors. This initial chapter in MIT-WPU history was a testament to its dedication to nurturing knowledge and innovation.</p>
                        <img
                            src={inaugral}
                            alt="MIT-WPU History"
                            className="history-legacy-image"
                        />
                    </div>
                    <div className="history-legacy-section">
                        <h2>Global Recognition and Cultural Milestones: The Institutional Journey</h2>
                        <p>
                            From 1996 to 2003, MIT-WPU made remarkable strides toward its goal of becoming a global educational powerhouse. Notably, it established a UNESCO Chair, signifying an unwavering commitment to elevating international education standards. Hosting the World Philosophers Meet created a global platform for intellectual exchange, nurturing a vibrant academic community. The institution's dedication to peace earned it the prestigious World Peace Prize, recognizing its impactful peace initiatives. Furthermore, hosting the 69th Akhil Bharatiya Marathi Sahitya Sammelan marked a cultural milestone, highlighting its multifaceted role in education and culture. These accomplishments underscored university’s significance in academia and its global role as a champion of education, peace, and culture.
                        </p>
                        <img
                            src={global}
                            alt="MIT-WPU History"
                            className="history-legacy-image"
                        />
                    </div>

                    <div className="history-legacy-section">
                        <h2>Empowering Excellence: A Decade of Achievements and Impact</h2>
                        <p>
                            Between 2004 and 2014, MIT-WPU made significant additions to it's never ending list of achievements. The Bharat Asmita National Awards celebrated national pride, acknowledging significant national contributors. Establishing Vishwashanti Gurukul fostered holistic education, nurturing knowledge and character. The Silver Jubilee Year marked a quarter-century of unwavering excellence. The Bharatiya Chhatra Sansad empowered student leaders, shaping the nation's future. MIT-WPU hosting of the National Women's Parliament passionately championed gender equality, offering women a powerful platform to advocate for their rights. This decade, we exemplified the institution's commitment to national pride, holistic education, excellence, youth leadership, and gender equality, leaving a profound societal impact.
                        </p>
                        <img
                            src={bcs}
                            alt="Founder's Vision"
                            className="history-legacy-image"
                        />
                    </div>

                    <div className="history-legacy-section">
                        <h2>Expanding Horizons: Global Vision and Commitment to Peace</h2>
                        <p>
                            From 2015 to 2019, MIT (now MIT-WPU) embarked on an era of expansion, establishing Avantika University and MIT-Shillong, broadening its educational influence. Notably, the formation of the World Peace Dome in Loni, Pune, symbolised global harmony, reflecting the institution's commitment to peace worldwide. A poignant Public Dedication Ceremony underscored the university's unwavering dedication to peace and education. In this period, our global vision and its role as a beacon of enlightenment and harmony in education became even more pronounced.
                        </p>
                        <img
                            src={expanding}
                            alt="Holistic Education"
                            className="history-legacy-image"
                        />
                    </div>
                    <div className="history-legacy-section">
                        <h2>MIT-WPU: Leading the Future of Education through Innovation and Excellence</h2>
                        <p>
                            From 2021 to 2023, MIT-WPU has been on a rapidly transformative journey as it went through digital transformation, seamlessly blending modern teaching methods with its rich tradition, showcasing adaptability and progressive thinking. In 2022, the institution earned the prestigious "Great Place to Work" title, affirming its excellence in education and innovation. This recognition was a testament to an enduring commitment to education, peace, and innovation. It encapsulated their inspiring journey, marked by growth and a profound positive impact on the world - a legacy that continues to shape the future of higher education in India, setting benchmarks for the world to follow.
                        </p>
                        <img
                            src={kaman}
                            alt="Founder's Vision"
                            className="history-legacy-image"
                        />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Historyandlegacy;
