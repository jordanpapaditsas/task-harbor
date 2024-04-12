namespace task_harbor.Dto
{
    public class UserDto
    {
        public Guid Id { get; set; }
        public string? Token { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Email { get; set; }

    }
}
