import { Container, Typography, Button, Stack } from "@mui/material";
import { MotionBox, fadeUp } from "../components/Motion";
import { Link as RouterLink } from "react-router-dom";

export default function CTASection() {
    const scrollToContact = () => {
        const element = document.getElementById('contact-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Container 
            id="contact-section"
            maxWidth="lg" 
            sx={{ 
                py: 12, 
                textAlign: "center",
                background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(16,185,129,0.1))",
                borderRadius: 4,
                border: "1px solid rgba(59,130,246,0.2)"
            }}
        >
            <MotionBox
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <Typography variant="h3" fontWeight={700} gutterBottom>
                    Ready to Grow Your Business?
                </Typography>

                <Typography variant="h6" color="text.secondary" sx={{ mb: 5, maxWidth: 700, mx: 'auto' }}>
                    Get a free consultation and quote. Let's discuss how we can bring your vision to life
                    and help your business succeed online.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                    <Button 
                        size="large" 
                        variant="contained"
                        component={RouterLink}
                        to="/contact"
                    >
                        Get Free Quote
                    </Button>
                    <Button 
                        size="large" 
                        variant="outlined"
                        component={RouterLink}
                        to="/services"
                    >
                        View Services
                    </Button>
                </Stack>
            </MotionBox>
        </Container>
    );
}
