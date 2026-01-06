import { Container, Grid, Typography, Box } from "@mui/material";
import { MotionBox, fadeUp } from "../components/Motion";

const steps = [
    { num: "01", title: "Consultation", desc: "We discuss your vision, goals, and requirements" },
    { num: "02", title: "Design & Plan", desc: "Create wireframes and project roadmap" },
    { num: "03", title: "Development", desc: "Build your website with modern technologies" },
    { num: "04", title: "Launch & Support", desc: "Deploy your site and provide ongoing support" },
];

export default function HowItWorksSection() {
    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            {/* Section title */}
            <Typography
                variant="h4"
                fontWeight={600}
                sx={{ textAlign: "center", mb: 2 }}
            >
                How We Work
            </Typography>
            
            <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}>
                A simple, transparent process from concept to launch
            </Typography>

            <Grid container spacing={4} sx={{ mt: 2 }}>
                {steps.map((step, i) => (
                    <Grid item xs={12} sm={6} md={3} key={i}>
                        <MotionBox
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <Box
                                sx={{
                                    textAlign: "center",
                                    p: 3,
                                    borderRadius: 2,
                                    background: "linear-gradient(180deg, rgba(59,130,246,0.1), rgba(59,130,246,0.05))",
                                    border: "1px solid rgba(59,130,246,0.2)",
                                    height: '100%'
                                }}
                            >
                                <Typography 
                                    variant="h3" 
                                    fontWeight={700} 
                                    sx={{ 
                                        color: 'primary.main',
                                        opacity: 0.6,
                                        mb: 2
                                    }}
                                >
                                    {step.num}
                                </Typography>
                                <Typography variant="h6" fontWeight={600} gutterBottom>
                                    {step.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {step.desc}
                                </Typography>
                            </Box>
                        </MotionBox>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
