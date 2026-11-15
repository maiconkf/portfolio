/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import React from "react";

const Chip: React.FC<{
  children: React.ReactNode;
  sx?: object;
  className?: string;
}> = ({ children, sx, className }) => (
  <Box
    className={className}
    sx={{
      position: "absolute",
      px: 1.75,
      py: 1,
      borderRadius: "14px",
      fontSize: "0.8125rem",
      fontWeight: 600,
      color: "#1F1300",
      backgroundColor: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      boxShadow: "0 12px 30px -10px rgba(0,0,0,0.35)",
      whiteSpace: "nowrap",
      transition: "transform .5s cubic-bezier(.22,1,.36,1)",
      ...sx,
    }}
  >
    {children}
  </Box>
);

export const QuoryVisual: React.FC<{ en?: boolean }> = ({ en }) => (
  <Box
    sx={{
      position: "relative",
      height: "100%",
      minHeight: { xs: 300, md: 440 },
      display: "grid",
      placeItems: "center",
      overflow: "hidden",
      background:
        "radial-gradient(circle at 30% 20%, #FCD34D 0%, transparent 55%), linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)",
      ".project-card:hover & .q-img": { transform: "rotate(0deg) scale(1.04)" },
      ".project-card:hover & .q-chip-1": { transform: "translate(-6px, -6px)" },
      ".project-card:hover & .q-chip-2": { transform: "translate(6px, 6px)" },
    }}
  >
    <Box
      className="q-img"
      sx={{
        width: { xs: 170, md: 220 },
        height: { xs: 170, md: 220 },
        borderRadius: "40px",
        overflow: "hidden",
        transform: "rotate(-6deg)",
        boxShadow: "0 30px 60px -15px rgba(120, 40, 0, 0.55)",
        transition: "transform .6s cubic-bezier(.22,1,.36,1)",
        "& img": { width: "100%", height: "100%", objectFit: "cover" },
      }}
    >
      <picture>
        <source srcSet="/img/quory@3x.webp" type="image/webp" />
        <img
          src="/img/quory@3x.jpg"
          width={220}
          height={220}
          alt="Quory"
          loading="lazy"
        />
      </picture>
    </Box>
    <Chip className="q-chip-1" sx={{ top: "16%", left: { xs: "6%", md: "10%" } }}>
      {en ? "🎉 Party on Saturday" : "🎉 Festa no sábado"}
    </Chip>
    <Chip
      className="q-chip-2"
      sx={{ bottom: "16%", right: { xs: "6%", md: "10%" } }}
    >
      {en ? "👥 +128 going" : "👥 +128 confirmados"}
    </Chip>
  </Box>
);

const nonnoCategories = [
  { name: "Antipasti", img: "/img/leplat/nonno-burrata.jpg", active: true },
  { name: "Saladas", img: "/img/leplat/nonno-salada.jpg", active: false },
  { name: "Parmegianas", img: "/img/leplat/nonno-parmegiana.jpg", active: false },
  { name: "Massas", img: "/img/leplat/nonno-canelone.jpg", active: false },
];

export const LeplatVisual: React.FC<{ en?: boolean }> = ({ en }) => (
  <Box
    sx={{
      position: "relative",
      height: "100%",
      minHeight: { xs: 360, md: 440 },
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      overflow: "hidden",
      background:
        "radial-gradient(circle at 20% 15%, #3B82F6 0%, transparent 50%), radial-gradient(circle at 85% 80%, #6366F1 0%, transparent 55%), linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)",
      ".project-card:hover & .l-phone-main": {
        transform: "translateY(-12px) rotate(-1deg)",
      },
      ".project-card:hover & .l-card-demo": {
        transform: "translate(6px, -10px) rotate(2deg)",
      },
    }}
  >
    {/* Top-left LePlat brand badge */}
    <Box
      sx={{
        position: "absolute",
        top: { xs: 14, md: 20 },
        left: { xs: 14, md: 22 },
        zIndex: 3,
        display: "inline-flex",
        alignItems: "center",
        gap: 1.25,
        px: 1.75,
        py: 0.85,
        borderRadius: "999px",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 12px 30px -8px rgba(0, 0, 0, 0.4)",
      }}
    >
      <img
        src="/img/leplat/leplat.png"
        alt="LePlat"
        style={{ height: 18, width: "auto", display: "block" }}
      />
      <Box
        component="span"
        sx={{
          px: 1,
          py: 0.25,
          borderRadius: "999px",
          fontSize: "0.6875rem",
          fontWeight: 700,
          backgroundColor: "#ECFDF5",
          color: "#047857",
        }}
      >
        {en ? "0% commission" : "0% comissão"}
      </Box>
    </Box>

    {/* Secondary floating card: delivery.leplat.com.br/demo */}
    <Box
      className="l-card-demo"
      sx={{
        display: { xs: "none", sm: "block" },
        position: "absolute",
        right: { sm: 14, md: 18 },
        bottom: { sm: 18, md: 22 },
        zIndex: 3,
        width: 215,
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 25px 50px -12px rgba(2, 6, 23, 0.65)",
        border: "1px solid rgba(226, 232, 240, 0.9)",
        transform: "rotate(3deg)",
        transition: "transform .6s cubic-bezier(.22,1,.36,1)",
        color: "#0F172A",
      }}
    >
      {/* Banner header */}
      <Box sx={{ position: "relative", height: 64, overflow: "hidden" }}>
        <img
          src="/img/leplat/demo-banner.jpg"
          alt="Restaurante Demo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(2,6,23,0.85), rgba(2,6,23,0.2))",
            display: "flex",
            alignItems: "flex-end",
            p: 1.25,
            gap: 1,
          }}
        >
          <img
            src="/img/leplat/leplat.png"
            alt="Logo Demo"
            style={{
              width: 26,
              height: 26,
              borderRadius: 7,
              backgroundColor: "#fff",
              objectFit: "contain",
              padding: 2,
            }}
          />
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Restaurante Demo
            </Typography>
            <Box
              component="span"
              sx={{
                mt: 0.35,
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                px: 0.85,
                py: 0.15,
                borderRadius: "999px",
                fontSize: 8.5,
                fontWeight: 700,
                backgroundColor: "#10B981",
                color: "#fff",
              }}
            >
              ● {en ? "Open now" : "Aberto agora"}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Featured product from delivery.leplat.com.br/demo */}
      <Box sx={{ p: 1.25, backgroundColor: "#F8FAFC" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.75 }}>
          <StarRoundedIcon sx={{ fontSize: 12, color: "#F59E0B" }} />
          <Typography sx={{ fontSize: 9.5, fontWeight: 800, color: "#0F172A" }}>
            {en ? "Featured · Delivery" : "Destaques · Delivery"}
          </Typography>
        </Box>

        {[
          {
            name: "Clássico",
            desc: "Pão, costela, queijo",
            price: "R$ 29,90",
            img: "/img/leplat/demo-burger.jpg",
          },
          {
            name: "Monte o seu (Açaí)",
            desc: "Até 3 adicionais",
            price: "R$ 19,90",
            img: "/img/leplat/demo-acai.jpg",
          },
        ].map((item) => (
          <Box
            key={item.name}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              p: 0.85,
              mb: 0.75,
              borderRadius: "10px",
              backgroundColor: "#fff",
              border: "1px solid #E2E8F0",
            }}
          >
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#0F172A",
                  lineHeight: 1.2,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: 8.5,
                  color: "#64748B",
                  lineHeight: 1.2,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.desc}
              </Typography>
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#030302",
                  mt: 0.25,
                }}
              >
                {item.price}
              </Typography>
            </Box>
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          </Box>
        ))}

        <Box
          sx={{
            mt: 0.5,
            py: 0.65,
            px: 1.25,
            borderRadius: "8px",
            backgroundColor: "#030302",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 9.5,
            fontWeight: 700,
          }}
        >
          <span>{en ? "View bag (2)" : "Ver sacola (2)"}</span>
          <span>R$ 49,80 →</span>
        </Box>
      </Box>
    </Box>

    {/* Main Phone Mockup: cardapio.leplat.com.br/nonno-chiesa */}
    <Box
      className="l-phone-main"
      sx={{
        position: "relative",
        zIndex: 2,
        width: { xs: 250, md: 270 },
        height: { xs: 340, md: 385 },
        mr: { xs: 0, sm: 10, md: 11 },
        mb: -5,
        p: 1.1,
        borderRadius: "34px 34px 0 0",
        backgroundColor: "#090D16",
        boxShadow: "0 35px 70px -15px rgba(2, 6, 23, 0.75)",
        border: "1px solid rgba(255,255,255,0.14)",
        transition: "transform .6s cubic-bezier(.22,1,.36,1)",
      }}
    >
      <Box
        sx={{
          height: "100%",
          borderRadius: "26px 26px 0 0",
          backgroundColor: "#F8FAFC",
          overflow: "hidden",
          color: "#0F172A",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Nonno Chiesa Cream Header (#f8efe2) */}
        <Box sx={{ backgroundColor: "#F8EFE2", px: 1.75, pt: 1.5, pb: 1.25 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.1 }}>
            <img
              src="/img/leplat/nonno-logo.jpg"
              alt="Nonno Chiesa"
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                objectFit: "cover",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              }}
            />
            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  fontSize: 8.5,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#475569",
                  lineHeight: 1.1,
                }}
              >
                {en ? "Digital Menu" : "Cardápio Digital"}
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 800,
                  color: "#0F172A",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                Nonno Chiesa
              </Typography>
            </Box>
          </Box>

          {/* Search bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              px: 1.25,
              py: 0.65,
              borderRadius: "9px",
              backgroundColor: "#FFFFFF",
              color: "#94A3B8",
              fontSize: 9.5,
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
            }}
          >
            <SearchRoundedIcon sx={{ fontSize: 13, color: "#94A3B8" }} />
            <span>
              {en
                ? "Search dishes, drinks..."
                : "Buscar pratos, bebidas..."}
            </span>
          </Box>
        </Box>

        {/* Stories-style Category Bar */}
        <Box
          sx={{
            display: "flex",
            gap: 1.25,
            px: 1.75,
            py: 1,
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #E2E8F0",
          }}
        >
          {nonnoCategories.map((cat) => (
            <Box
              key={cat.name}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.35,
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "11px",
                  overflow: "hidden",
                  border: cat.active
                    ? "2px solid #635F5A"
                    : "1px solid #E2E8F0",
                  opacity: cat.active ? 1 : 0.78,
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: 8.5,
                  fontWeight: cat.active ? 800 : 500,
                  color: cat.active ? "#0F172A" : "#64748B",
                }}
              >
                {cat.name}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Category Section & Featured Dish Photo Card */}
        <Box sx={{ p: 1.5, flex: 1 }}>
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 800,
              color: "#0F172A",
              mb: 0.75,
              letterSpacing: "-0.01em",
            }}
          >
            Antipasti
          </Typography>
          <Box
            sx={{
              borderRadius: "14px",
              overflow: "hidden",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E2E8F0",
              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.05)",
            }}
          >
            <Box sx={{ height: 105, overflow: "hidden" }}>
              <img
                src="/img/leplat/nonno-burrata.jpg"
                alt="Burrata di Capri"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                p: 1.1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{ fontSize: 11, fontWeight: 700, color: "#0F172A" }}
              >
                Burrata di Capri
              </Typography>
              <Box
                component="span"
                sx={{
                  fontSize: 9.5,
                  fontWeight: 800,
                  px: 1,
                  py: 0.25,
                  borderRadius: "999px",
                  backgroundColor: "#F8EFE2",
                  color: "#57534E",
                }}
              >
                Nonno Chiesa
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

export const projectAccent = {
  quory: "rgba(245, 158, 11, 0.22)",
  leplat: "rgba(59, 130, 246, 0.24)",
};

export const projectColor = {
  quory: "#FBBF24",
  leplat: "#60A5FA",
};
