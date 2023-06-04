using Lyzer_BE.Services.Concrete;
using Lyzer_BE.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder = ConfigureServices(builder);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//TODO: Find a way to inject IDriverService using DriverService into DriverController

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

WebApplicationBuilder ConfigureServices(WebApplicationBuilder builder)
{
    builder.Services.AddScoped<IDriverService, DriverService>();
    return builder;
}