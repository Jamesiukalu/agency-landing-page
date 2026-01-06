// src/pages/home/HeroSection.tsx
import { Container, Typography, Button, Stack } from "@mui/material";
import { MotionBox, fadeUp } from "../components/Motion";
import { Link as RouterLink } from "react-router-dom";

export default function HeroSection() {
    const scrollToContact = () => {
        const element = document.getElementById('contact-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 14 }}>
            <MotionBox
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h2" fontWeight={700} gutterBottom>
                    Build Your Digital Presence.
                    <br />
                    Grow Your Business.
                </Typography>

                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 620 }}>
                    Professional websites and web applications for SMEs, startups, and growing businesses.
                    Transform your vision into reality with our expert development services.
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                    <Button size="large" variant="contained" onClick={scrollToContact}>
                        Get Free Quote
                    </Button>
                    <Button 
                        size="large" 
                        variant="outlined" 
                        component={RouterLink} 
                        to="/services"
                    >
                        Our Services
                    </Button>
                </Stack>
            </MotionBox>
        </Container>
    );
}
