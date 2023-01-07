using SE_WebAPI.Contexts;
using SE_WebAPI.Domains;
using SE_WebAPI.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SE_WebAPI.Repositories
{
    public class ImgRepository : IImgRepository
    {
        SEContext ctx = new SEContext();

        public void CadastrarCaminhos(short idImovel, List<string> caminhos)
        {
            List<DbImg> imgsPatchs = new List<DbImg>();

            for (int i = 0; i < caminhos.Count; i++)
            {
                DbImg imgPatch = new DbImg();
                imgPatch.IdImovel= idImovel;
                imgPatch.Img = caminhos[i];
                imgsPatchs.Add(imgPatch);
            }
            ctx.DbImgs.AddRange(imgsPatchs);
            ctx.SaveChanges();
        }

        public void DeletarCaminhos(short idImovel)
        {
            ctx.DbImgs.RemoveRange(ctx.DbImgs.Where(i => i.IdImovel== idImovel));
            ctx.SaveChanges();
        }

        public List<string> ListarCaminhos(short idImovel)
        {
            List<DbImg> listaImgs = ctx.DbImgs.Where(i => i.IdImovel == idImovel).ToList();
            List<string> listaCaminhos = new List<string>();
            
            foreach (DbImg img in listaImgs)
            {
                listaCaminhos.Add(img.Img);
            }

            return listaCaminhos;
        }
    }
}
