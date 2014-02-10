package config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = { "app" })
public class ApplicationConfig extends WebMvcConfigurerAdapter {

	@Bean
	InternalResourceViewResolver templateResolver() {
		InternalResourceViewResolver templateResolver = new InternalResourceViewResolver();
		templateResolver.setPrefix("/WEB-INF/views/");

		return templateResolver;
	}
}
