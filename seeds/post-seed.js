const Posts = require('../models/posts');


const postData = [
    {
        title: 'The joy of playing guitar',
        content: `Playing guitar can be one of the most rewarding and fulfilling experiences a person can have. Whether you're a beginner or an experienced player, there's always something new to learn, and there's no end to the joy that comes from making beautiful music.
        For beginners, learning to play guitar may seem daunting at first, but with regular practice and dedication, anyone can become proficient. As you begin to master the basics, you'll start to notice improvements in your playing ability, which can be incredibly motivating and exciting.
        One of the best things about playing guitar is the way it allows you to express yourself through music. Whether you're playing for others or just for yourself, the feeling of creating something beautiful can be incredibly uplifting and rewarding. Not only will you feel a sense of accomplishment when you tackle a difficult song or riff, but you'll also experience the joy that comes from making music with others.
        In addition to the emotional benefits, playing guitar is also great for your mental health. It's been shown to reduce stress and anxiety, improve cognitive function, and boost overall well-being. And because it requires focus and concentration, it can also serve as a form of meditation, helping you relax and unwind after a long day.
        So if you're looking for a new hobby to take up, consider giving guitar a try. With its endless possibilities for creativity and expression, it's sure to bring you joy for years to come.`,
        summary: `Playing guitar can be a rewarding and expressive activity that can reduce stress, enhance cognitive function, and promote overall wellbeing. The benefits of learning to play the guitar include improving memory, strengthening hand muscles, increasing creativity, and boosting self-confidence. It's also a fun way to connect with others and explore new forms of musical expression.`,
        date_created: '03/4/2024',
        user_id: 1
    },
    {
        title: 'My favorite new developments in technology',
        content: `The latest technology is an ever-evolving industry that has revolutionized every aspect of modern life. From smartphones and laptops to virtual reality and artificial intelligence, the world is rapidly changing due to technological advances.

        One of the most exciting developments in recent years is the rise of 5G networks. This new wireless technology promises speeds up to 100 times faster than current 4G networks, enabling new possibilities for innovations such as self-driving cars, remote surgery, and smart cities. With more bandwidth and lower latency, 5G will allow for a seamless connection between devices, even in crowded areas.
        
        Artificial intelligence (AI) is another technology that's poised to change the way we live and work. With its ability to process vast amounts of data and identify patterns, AI can automate tasks that were once thought impossible. For example, machine learning algorithms can help doctors identify diseases early on, while natural language processing can improve customer service by understanding and responding to customer inquiries more accurately.
        
        Virtual and augmented reality are also transforming the way we interact with each other and the world around us. VR allows us to create immersive experiences that transport us to different locations and situations, while AR overlays digital information onto the real world. These technologies have applications in fields like education, entertainment, and marketing.
        
        Finally, blockchain technology is changing the way we think about security and transparency. By using decentralized networks and cryptography, blockchain enables secure transactions without the need for intermediaries. Industries such as finance, healthcare, and logistics can benefit from this technology by increasing efficiency and reducing fraud.
        
        In conclusion, the latest technology advancements cover a vast array of inventions that are changing the world. From 5G networks to artificial intelligence, virtual and augmented reality to blockchain, these innovations are reshaping our lives in profound ways. It's an exciting time to be alive, and we can't wait to see what the future holds.`,
        summary: `5G networks, AI, VR/AR and Blockchain are latest technological advancements reshaping our lives drastically. Exciting opportunities arise with these.`,
        date_created: '03/5/2024',
        user_id: 2
    }
];


const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;