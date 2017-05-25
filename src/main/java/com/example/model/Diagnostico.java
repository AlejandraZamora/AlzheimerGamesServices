package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Entity
	    @Table(name = "diagnosticos", schema = "application")
public class Diagnostico {
	public Diagnostico(){}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "diagnostico_id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "title")
private String title;

public String getTitle() {
return title;
}

public void setTitle(String title) {
this.title = title;
}
@Column(name = "descripcion")
private String descripcion;

public String getDescripcion() {
return descripcion;
}

public void setDescripcion(String descripcion) {
this.descripcion = descripcion;
}
@Column(name = "date")
private Calendar date;

public Calendar getDate() {
return date;
}

public void setDate(Calendar date) {
this.date = date;
}
        }
