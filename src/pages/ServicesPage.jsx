import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const MotionBox = motion(Box);

const services = [
    {
        title: "Business Websites",
        description:
            "Professional, responsive websites designed to showcase your brand, engage visitors, and convert them into customers. Perfect for SMEs looking to establish their online presence.",
    },
    {
        title: "E-Commerce Stores",
        description:
            "Full-featured online stores with secure payment processing, inventory management, and seamless checkout experiences that drive sales and growth.",
    },
    {
        title: "Web Applications",
        description:
            "Custom web apps tailored to your unique business needs - from booking systems and dashboards to customer portals and management tools.",
    },
    {
        title: "Portfolio Websites",
        description:
            "Stunning, creative portfolio sites for freelancers, artists, photographers, and professionals to showcase their work and attract clients.",
    },
    {
        title: "Startup MVPs",
        description:
            "Launch your startup idea quickly with a minimum viable product. We help you validate your concept and get to market fast with a scalable foundation.",
    },
    {
        title: "Website Maintenance",
        description:
            "Ongoing support, updates, security patches, and optimization to keep your website running smoothly and performing at its best.",
    },
];

export default function ServicesPage() {
    return (
        <Box>
            {/* Header */}
            <Box sx={{ textAlign: "center", py: 6 }}>
                <Typography variant="h3" fontWeight={700} gutterBottom>
                    Our Services
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ maxWidth: 700, mx: "auto" }}
                >
                    Comprehensive web solutions designed to help your business thrive in the digital world.
                    From concept to launch and beyond.
                </Typography>
            </Box>

            {/* FLEX SERVICES */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                }}
            >
                {services.map((service, i) => (
                    <MotionBox
                        key={i}
                        sx={{
                            /* 🔑 REQUIRED FOR MOBILE FLEX */
                            minWidth: 0,

                            flexBasis: {
                                xs: "100%",
                                sm: "50%",
                                md: "33.333%",
                            },
                            width: {
                                xs: "100%",
                                sm: "50%",
                                md: "33.333%",
                            },

                            height: {
                                xs: "50vh",
                                sm: "50vh",
                                md: "60vh",
                            },

                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            p: 4,

                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                            border: "1px solid rgba(255,255,255,0.08)",
                            
                            "&:hover": {
                                background: "linear-gradient(180deg, rgba(59,130,246,0.1), rgba(59,130,246,0.05))",
                                borderColor: "rgba(59,130,246,0.3)",
                                transition: "all 0.3s ease",
                            }
                        }}
                    >

                        <Typography variant="h5" fontWeight={600} gutterBottom>
                            {service.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 400 }}>
                            {service.description}
                        </Typography>
                    </MotionBox>
                ))}
            </Box>

            {/* CTA */}
            <Box sx={{ textAlign: "center", py: 8, px: 4 }}>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                    Ready to Get Started?
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                    Let's discuss your project and create a custom solution that fits your needs and budget.
                </Typography>
                <Button 
                    variant="contained" 
                    size="large"
                    component={RouterLink}
                    to="/contact"
                >
                    Get Free Consultation
                </Button>
            </Box>
        </Box>
    );
}
