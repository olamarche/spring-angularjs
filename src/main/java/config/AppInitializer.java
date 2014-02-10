package config;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration.Dynamic;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;
import org.springframework.web.util.Log4jConfigListener;

public class AppInitializer  implements WebApplicationInitializer {

	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		
		// Create the 'root' Spring application context
		AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();
		rootContext.register(ApplicationConfig.class);
	      
		// pour log4j
		servletContext.addListener(new Log4jConfigListener());
		
		// Register and map the dispatcher servlet
		Dynamic dispatcherSpring = servletContext.addServlet("api", new DispatcherServlet(
				rootContext));
		dispatcherSpring.setLoadOnStartup(1);
		dispatcherSpring.addMapping("/api/");

		servletContext.addListener(new ContextLoaderListener(rootContext));

	}

}
