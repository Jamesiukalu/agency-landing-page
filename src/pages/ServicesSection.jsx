// src/pages/home/ServicesSection.tsx
import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { MotionBox, fadeUp } from "../components/Motion";
import WebIcon from '@mui/icons-material/Web';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BusinessIcon from '@mui/icons-material/Business';

const services = [
    {
        icon: WebIcon,
        title: "Business Websites",
        desc: "Professional, responsive websites that showcase your brand and convert visitors into customers.",
    },
    {
        icon: ShoppingCartIcon,
        title: "E-Commerce Solutions",
        desc: "Full-featured online stores with secure payments, inventory management, and seamless checkout.",
    },
    {
        icon: PhoneAndroidIcon,
        title: "Web Applications",
        desc: "Custom web apps tailored to your business needs, from booking systems to management portals.",
    },
    {
        icon: BusinessIcon,
        title: "Portfolio Sites",
        desc: "Stunning portfolio websites for creatives, freelancers, and professionals to showcase their work.",
    },
];

export default function ServicesSection() {
    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Typography variant="h4" fontWeight={600} gutterBottom textAlign="center">
                What We Offer
            </Typography>
            
            <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 5, maxWidth: 700, mx: 'auto' }}>
                Complete web solutions designed to help your business thrive online
            </Typography>

            <Grid container spacing={4} sx={{ mt: 2 }}>
                {services.map((s, i) => {
                    const IconComponent = s.icon;
                    return (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <MotionBox
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card sx={{ height: "100%", textAlign: 'center', p: 2 }}>
                                    <CardContent>
                                        <Box sx={{ mb: 2 }}>
                                            <IconComponent sx={{ fontSize: 48, color: 'primary.main' }} />
                                        </Box>
                                        <Typography fontWeight={600} variant="h6" gutterBottom>
                                            {s.title}
                                        </Typography>
                                        <Typography color="text.secondary" variant="body2">
                                            {s.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </MotionBox>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
}
