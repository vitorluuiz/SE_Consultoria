using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using SE_WebAPI.Domains;

#nullable disable

namespace SE_WebAPI.Contexts
{
    public partial class SEContext : DbContext
    {
        public SEContext()
        {
        }

        public SEContext(DbContextOptions<SEContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Aprovacao> Aprovacaos { get; set; }
        public virtual DbSet<Categoria> Categorias { get; set; }
        public virtual DbSet<Imovei> Imoveis { get; set; }
        public virtual DbSet<InformacoesAdicionai> InformacoesAdicionais { get; set; }
        public virtual DbSet<TipoInfo> TipoInfos { get; set; }
        public virtual DbSet<TiposAnuncio> TiposAnuncios { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=VITOR-PC; initial catalog=SE_db; user Id=sa; pwd=Senai@132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Aprovacao>(entity =>
            {
                entity.HasKey(e => e.IdAprovacao)
                    .HasName("PK__Aprovaca__BD65C850A2776651");

                entity.ToTable("Aprovacao");

                entity.HasIndex(e => e.Estado, "UQ__Aprovaca__36DF552F44390B94")
                    .IsUnique();

                entity.Property(e => e.IdAprovacao)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("idAprovacao");

                entity.Property(e => e.Estado)
                    .HasMaxLength(12)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Categoria>(entity =>
            {
                entity.HasKey(e => e.IdCategoria)
                    .HasName("PK__Categori__8A3D240C28CB0A20");

                entity.HasIndex(e => e.Categoria1, "UQ__Categori__08015F8BECBAFA9B")
                    .IsUnique();

                entity.Property(e => e.IdCategoria)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("idCategoria");

                entity.Property(e => e.Categoria1)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Categoria");
            });

            modelBuilder.Entity<Imovei>(entity =>
            {
                entity.HasKey(e => e.IdImovel)
                    .HasName("PK__Imoveis__52373898621A5044");

                entity.Property(e => e.IdImovel).HasColumnName("idImovel");

                entity.Property(e => e.Aluguel).HasColumnType("decimal(7, 2)");

                entity.Property(e => e.Bairro)
                    .HasMaxLength(35)
                    .IsUnicode(false);

                entity.Property(e => e.Construido).HasColumnType("decimal(6, 2)");

                entity.Property(e => e.CustosMensais).HasColumnType("decimal(7, 2)");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.IdAprovacao).HasColumnName("idAprovacao");

                entity.Property(e => e.IdCategoria).HasColumnName("idCategoria");

                entity.Property(e => e.IdTipoAnuncio).HasColumnName("idTipoAnuncio");

                entity.Property(e => e.ImgPrincipal)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Terreno).HasColumnType("decimal(7, 2)");

                entity.Property(e => e.Titulo)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Valor).HasColumnType("decimal(9, 2)");

                entity.HasOne(d => d.IdAprovacaoNavigation)
                    .WithMany(p => p.Imoveis)
                    .HasForeignKey(d => d.IdAprovacao)
                    .HasConstraintName("FK__Imoveis__idAprov__4316F928");

                entity.HasOne(d => d.IdCategoriaNavigation)
                    .WithMany(p => p.Imoveis)
                    .HasForeignKey(d => d.IdCategoria)
                    .HasConstraintName("FK__Imoveis__idCateg__4222D4EF");

                entity.HasOne(d => d.IdTipoAnuncioNavigation)
                    .WithMany(p => p.Imoveis)
                    .HasForeignKey(d => d.IdTipoAnuncio)
                    .HasConstraintName("FK__Imoveis__idTipoA__412EB0B6");
            });

            modelBuilder.Entity<InformacoesAdicionai>(entity =>
            {
                entity.HasKey(e => e.IdInfo)
                    .HasName("PK__Informac__B0BF47D70A93E131");

                entity.Property(e => e.IdInfo).HasColumnName("idInfo");

                entity.Property(e => e.IdImovel).HasColumnName("idImovel");

                entity.Property(e => e.IdTipoInfo).HasColumnName("idTipoInfo");

                entity.HasOne(d => d.IdImovelNavigation)
                    .WithMany(p => p.InformacoesAdicionais)
                    .HasForeignKey(d => d.IdImovel)
                    .HasConstraintName("FK__Informaco__idImo__48CFD27E");

                entity.HasOne(d => d.IdTipoInfoNavigation)
                    .WithMany(p => p.InformacoesAdicionais)
                    .HasForeignKey(d => d.IdTipoInfo)
                    .HasConstraintName("FK__Informaco__idTip__47DBAE45");
            });

            modelBuilder.Entity<TipoInfo>(entity =>
            {
                entity.HasKey(e => e.IdTipoInfo)
                    .HasName("PK__TipoInfo__732019378EC358CA");

                entity.ToTable("TipoInfo");

                entity.Property(e => e.IdTipoInfo)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("idTipoInfo");

                entity.Property(e => e.TipoInfo1)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("TipoInfo");
            });

            modelBuilder.Entity<TiposAnuncio>(entity =>
            {
                entity.HasKey(e => e.IdTipoAnuncio)
                    .HasName("PK__TiposAnu__B7F72CBF0950E230");

                entity.HasIndex(e => e.TipoAnuncio, "UQ__TiposAnu__2EF586DEDAD1C9CA")
                    .IsUnique();

                entity.Property(e => e.IdTipoAnuncio)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("idTipoAnuncio");

                entity.Property(e => e.TipoAnuncio)
                    .IsRequired()
                    .HasMaxLength(7)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuarios__645723A67169BA27");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Celular)
                    .IsRequired()
                    .HasMaxLength(9)
                    .IsUnicode(false)
                    .IsFixedLength(true);

                entity.Property(e => e.Ddd)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("DDD")
                    .IsFixedLength(true);

                entity.Property(e => e.NomeUsuario)
                    .HasMaxLength(55)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .IsFixedLength(true);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
