using Microsoft.EntityFrameworkCore;
using task_harbor.Models;

namespace task_harbor.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Models.TaskNote> TaskNotes { get; set; }

        public DbSet<Models.User> Users { get; set; }
        
            
        
    }
}
